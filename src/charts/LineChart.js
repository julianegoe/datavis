import * as d3 from 'd3';

class LineChart {
	constructor({ element, data }) {
		this.element = element;
		this.data = data;
		console.log(data);

		this.draw();
	}

	draw() {
		this.width = this.element.offsetWidth;
		console.log('width: ' + this.width);
		this.height = this.width / 2;
		this.margin = {
			top: 20,
			right: 20,
			bottom: 20,
			left: 20,
		};

		this.element.innerHTML = '';
		const svg = d3.select(this.element).append('svg');
		svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);

		this.plot = svg
			.append('g')
			.attr('transform', `translate(${this.margin.left},${this.margin.top})`);

		this.createScales();
		this.addAxes();
		this.addLine();
	}

	createScales() {
		const m = this.margin;

		const xExtent = d3.extent(this.data, (d) => d.Tag);
		console.log('xextent: ' + xExtent);
		const yExtent = d3.extent(this.data, (d) => d.COVID);

		if (yExtent[0] > 0) {
			yExtent[0] = 0;
		}

		this.xScale = d3
			.scaleTime()
			.range([0, this.width - m.right])
			.domain(xExtent);

		this.yScale = d3
			.scaleLinear()
			.range([this.height - (m.top + m.bottom), 0])
			.domain(yExtent);
	}

	addAxes() {
		const m = this.margin;

		const xAxis = d3
			.axisBottom()
			.scale(this.xScale)
			.ticks(d3.timeWeek);

		const yAxis = d3
			.axisLeft()
			.scale(this.yScale)
			.tickFormat(d3.format('d'));

		this.plot
			.append('g')
			.attr('class', 'x axis')
			.attr('transform', `translate(0, ${this.height - (m.top + m.bottom)})`)
			.call(xAxis);

		this.plot
			.append('g')
			.attr('class', 'y axis')
			.call(yAxis);
	}

	addLine() {
		const line = d3
			.line()
			.x((d) => this.xScale(d.Tag))
			.y((d) => this.yScale(d.COVID));
		this.plot
			.append('path')
			.datum(this.data)
			.classed('line', true)
			.attr('d', line)
			.attr('fill', 'none')
			.style('stroke', this.lineColor || 'red');
	}

	setColor(newColor) {
		this.plot.select('.line').style('stroke', newColor);

		this.lineColor = newColor;
	}

	setData(newData) {
		this.data = newData;

		this.draw();
	}
}

export default LineChart;
