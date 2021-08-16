<template>
    <div>
        <apexchart type="bar" :options="options" :series="series"> </apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
    export default {
        name: "ApexBarChart",
        components: {
            apexchart: VueApexCharts,
        },
        data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example',
          toolbar: {
                show: false
              },
          stacked: true,
        },
        colors: [({dataPointIndex, seriesIndex, w}) => {
            if (seriesIndex === 0) {return w.config.xaxis.categories[dataPointIndex]  === "Freitag" ? '#00E281' : '#006345'}
            else {return "#FEFFFE"}
            
        }],
        stroke: {
            colors:  ['#EEEEEE'],
        width: 5,
        dashArray: 10,
        },
        fill: {
              opacity: 1
            },
        xaxis: {
          categories: ['Montag',
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
			'Sonntag'],
        labels: {
          show: false,
      },
        },
        yaxis: {
          labels: {
              show: false
          },
          max: 120
      },
        grid: {
    show: false
      },
        tooltip: {
         enabled: false},
        dataLabels: {
         enabled: false}
      },

      series: [{
        name: 'Veröffentlichungen',
        data: [100, 90, 95, 110, 105, 120, 85, 100, 90, 95, 110, 105, 120, 85]
      },
      {
            name: '100%',
            data: new Array(14).fill(Math.max(100, 90, 95, 110, 105, 120, 85, 100, 90, 95, 110, 105, 120, 85)),
          }],    }
  }
    }
</script>

<style lang="scss" scoped>

</style>