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
		this.height = this.width / 3;
		this.margin = {
			top: 60,
			right: 60,
			bottom: 20,
			left: 50,
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

		this.yExtent = d3.extent(this.data, (d) => d.used / d.sent);

		if (this.yExtent[0] > 0) {
			this.yExtent[0] = 0;
		}

		console.log(this.yExtent)

		this.xScale = d3
			.scalePoint()
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

		const xAxis = d3
			.axisBottom()
			.scale(this.xScale)
			.ticks(d3.timeDay)
			.tickFormat(d3.timeFormat("%a %d"))
			.tickSize(- this.height)

		const yAxis = d3
			.axisLeft()
			.scale(this.yScale)
			.ticks()
			.tickFormat(d3.format('.0%'))

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

	addDot() {
		this.plot
		.selectAll(".dot")
		.data([this.data[this.data.length - 1]])
		.enter()
		.append("circle")
		.attr("r", 12)
		.attr("cx", (d) => this.xScale(d.date))
		.attr("cy", (d) => this.yScale(d.used / d.sent))
		.attr('fill', '#00E281' )
	}


	addLine() {
		const line = d3
			.line()
			.curve(d3.curveNatural)
			.x((d) => this.xScale(d.date))
			.y((d) => this.yScale(d.used / d.sent));
		this.plot
			.append('path')
			.datum(this.data)
			.classed('line', true)
			.attr('d', line)
			.attr('fill', 'none')
			.style('stroke', '#00B064')
			.style('stroke-width', 5);

		this.addDot()
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
