import * as d3 from 'd3';

class BarChart {
	constructor({ element, data }) {
		this.element = element;
		this.data = data;

		this.draw();
	}

	draw() {
		this.width = this.element.offsetWidth;
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
		this.addBar();
	}

	createScales() {
		const m = this.margin;

		const yExtent = d3.extent(this.data, (d) => d[1]);

		if (yExtent[0] > 0) {
			yExtent[0] = 0;
		}

		this.xScale = d3
			.scaleBand()
			.range([0, this.width - m.right])
			.domain(this.data.map((d) => d[0]))
			.padding(0.2);

		this.yScale = d3
			.scaleLinear()
			.range([this.height - (m.top + m.bottom), 0])
			.domain(yExtent);
	}

	addAxes() {
		const m = this.margin;

		const xAxis = d3.axisBottom().scale(this.xScale);

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

	addBar() {
		this.plot
			.selectAll('bar')
			.data(this.data)
			.enter()
			.append('rect')
			.attr('x', (d) => this.xScale(d[0]))
			.attr('y', (d) => this.yScale(d[1]))
			.attr('height', (d) => this.height - this.yScale(d[1]))
			.attr('width', this.xScale.bandwidth());
	}
}

export default BarChart;
