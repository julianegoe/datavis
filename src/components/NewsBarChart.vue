<template>
  <div>
    <canvas id="news-bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import newsData from '../newsItemData.js'

export default {
  name: 'NewsBarChart',
  data() {
    return {
      newsData: newsData
    }
  },
  mounted() {
    const ctx = document.getElementById('news-bar-chart');
    new Chart(ctx, this.newsData);
  }
}
</script>