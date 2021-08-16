const data = {
	key: [100, 90, 95, 110, 105, 120, 85, 100, 90, 95, 110, 105, 120, 85],
};

export const newsData = {
	type: 'bar',
	data: {
		labels: [
			'Montag',
			'Dienstag',
			'Mittwoch',
			'Donnerstg',
			'Freitag',
			'Samstag',
			'Sonntag',
			'Montag',
			'Dienstag',
			'Mittwoch',
			'Donnerstag',
			'Freitag',
			'Samstag',
			'Sonntag',
		],
		datasets: [
			{
				label: 'Verwendungen',
				data: [...data.key],
				backgroundColor: (context) => {
					const label = context.chart.data.labels[context.dataIndex];
					return label === 'Freitag' ? '#00E281' : '#006345';
				},
				barPercentage: 1.0,
				categoryPercentage: 0.7,
				barThickness: 'flex',
			},
			{
				label: 'Max',
				data: new Array(14).fill(Math.max(...[...data.key])),
				hoverBackgroundColor: '#f5f5f5',
				backgroundColor: '#f5f5f5',
				borderWidth: 5,
				borderColor: '#EEEEEE',
				borderSkipped: false,
			},
		],
	},
	options: {
		legend: {
			display: false,
		},
		responsive: true,
		tooltips: {
			enabled: false,
		},
		scales: {
			xAxes: [
				{
					gridLines: {
						display: false,
					},
					ticks: {
						display: false,
					},
					stacked: true,
				},
			],
			yAxes: [
				{
					gridLines: {
						display: false,
					},
					ticks: {
						display: false,
						beginAtZero: true,
						max: Math.max(...[...data.key]),
					},
					stacked: true,
				},
			],
		},
	},
};

export default newsData;
