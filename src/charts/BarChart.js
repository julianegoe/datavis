import * as d3 from 'd3';

class BarChart {
	constructor(data, element, options) {
		this.element = element;
		this.data = data;

		// options needs to be an object. Missions options have a default
		/* 
		{
			margin: {
				top: sent,
				right: sent,
				bottom: sent,
				left: umber
			},
			width: sent,
			height: sent,
			timeFormat: valid d3 timeformat,
			yTickFormat: valid d3.format for ticks on y axis,
		}
		*/
		this.options = options

		this.draw();
	}

	draw() {
		this.width = this.options.width || this.element.offsetWidth;
		this.height = this.options.height || this.width / 2;
		this.margin = {
			top: this.options.margin.top,
			right: this.options.margin.right,
			bottom: this.options.margin.bottom,
			left: this.options.margin.left,
		};

		this.element.innerHTML = '';
		const svg = d3.select(this.element).append('svg');
		svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);

		this.plot = svg
			.append('g')
			.attr('transform', `translate(${this.margin.left},${this.margin.top})`);

		this.createScales();
		this.addAxes();
		this.addBar();
		this.addColor();
		this.addDash();
		this.addHoverEffect()
	}

	createScales() {
		const m = this.margin;

		this.yExtent = d3.extent(this.data, (d) => d.sent);

		if (this.yExtent[0] > 0) {
			this.yExtent[0] = 0;
		}

		this.xScale = d3
			.scaleBand()
			.range([0, this.width - m.right])
			.domain(this.data.map((d) => d.date))
			.padding(0.2);

		this.yScale = d3
			.scaleLinear()
			.range([this.height - (m.top + m.bottom), 0])
			.domain(this.yExtent);
	}

	addAxes() {
		const m = this.margin;

		const xAxis = d3.axisBottom().scale(this.xScale).tickFormat(d3.timeFormat(this.options.timeFormat || "%a %d"))

		const yAxis = d3
			.axisLeft()
			.scale(this.yScale)
			.tickFormat(d3.format(this.options.yTickFormat || 'd'));

		this.plot
			.append('g')
			.attr('class', 'x axis')
			.attr('transform', `translate(0, ${this.height - (m.top + m.bottom)})`)
			.attr('opacity', '0' )
			.call(xAxis);

		this.plot
			.append('g')
			.attr('class', 'y axis')
			.attr('opacity', '0' )
			.call(yAxis);
	}

	addBar() {
		this.plot
			.selectAll('bar')
			.data(this.data)
			.enter()
			.append('rect')
			.attr('x', (d) => this.xScale(d.date))
			.attr('y', (d) => this.yScale(d.sent))
			.attr('height', (d) => this.height - this.margin.bottom - this.margin.top - this.yScale(d.sent))
			.attr('width', this.xScale.bandwidth())
	}

	addColor() {
		d3.selectAll('rect').attr('fill', function(d){
			return new Date(d.date).getDay() === 6 ?
			'#00E281' : '#006345'
		});
	}

	addDash() {
		const guideData = new Array(this.data.length).fill(this.yExtent[1])
		const newData = this.data.map((data, index) => {
			return {date: data.date, sent: guideData[index]}
		})
		this.plot
		.selectAll('guide-bar')
		.data(newData)
		.enter()
		.append('rect')
		.attr('x', (d) => this.xScale(d.date))
		.attr('y', (d) => this.yScale(d.sent))
		.attr('height', (d, i) => this.yScale(this.data[i].sent) - this.yScale(d.sent))
		.attr('width', this.xScale.bandwidth())
		.attr('fill', 'transparent')
		.attr('stroke', '#EEEEEE' )
		.attr('stroke-dasharray', `0 10 10 0`)
		.attr('stroke-width', '3')
	}

	addHoverEffect() {
		const bars = d3.selectAll('rect')
		bars.on('mouseenter', function() {
			d3.select(this).attr('opacity', '0.8')
		})
		.on('mouseleave', function() {
			d3.select(this).attr('opacity', '1')
		})
	}

}

export default BarChart;
