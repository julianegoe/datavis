const data = {
	key: [78, 79, 68, 90, 99, 74, 86, 86, 89, 95, 60, 70, 89, 85],
};

export const newsData = {
	type: 'line',
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
				borderWidth: 10,
				pointRadius: (context) => {
					return context.dataIndex === context.dataset.data.length - 1 ? 10 : 0;
				},
				borderColor: '#00B064',
				borderJointStyle: 'round',
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
						display: true,
						borderDash: [8, 4],
						borderWidth: 5,
					},
					ticks: {
						display: false,
					},
				},
			],
			yAxes: [
				{
					gridLines: {
						display: false,
					},
					ticks: {
						display: false,
						beginAtZero: false,
						max: Math.max(...[...data.key]),
					},
				},
			],
		},
	},
};

export default newsData;
