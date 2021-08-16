<template>
  <div>
    <canvas id="news-line-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import newsData from '../newsLineChartData.js'

export default {
  name: 'NewsLineChart',
  data() {
    return {
      newsData: newsData
    }
  },
  mounted() {
    const ctx = document.getElementById('news-line-chart');
    new Chart(ctx, this.newsData);
  }
}
</script>