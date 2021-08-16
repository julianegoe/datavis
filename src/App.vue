<template>
<h1>ChartsJS - Gesendete Beträge</h1>
<NewsBarChart></NewsBarChart>
<h1>ChartsJS - Verwendete Beträge</h1>
<NewsLineChart></NewsLineChart>
<h1>Apex Charts - Gesendete Beträge</h1>
<ApexBarChart></ApexBarChart>
<h1>D3 - Google Trends Covid</h1>
<D3LineChart></D3LineChart>
<D3CBarChart></D3CBarChart>


</template>

<script>
import NewsBarChart from "./components/NewsBarChart.vue"
import NewsLineChart from "./components/NewsLineChart.vue"
import ApexBarChart from "./components/ApexBarChart.vue"
import D3LineChart from "./components/D3LineChart.vue"
import D3CBarChart from "./components/D3BarChart.vue"
/* import Box from "./components/Box.vue"
 */
export default {
  name: "App",
  components: {
    NewsBarChart,
    NewsLineChart,
    ApexBarChart,
    D3LineChart,
    D3CBarChart
        },
}
</script>

<style>

body {
   background-color:  #f5f5f5;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
