<template>
<h1>ChartsJS - Gesendete Beträge</h1>
<ChartsjsBarChart></ChartsjsBarChart>
<h1>ChartsJS - Verwendete Beträge</h1>
<ChartsjsLineChart></ChartsjsLineChart>
<h1>Apex Charts - Gesendete Beträge</h1>
<ApexBarChart></ApexBarChart>
<h1>D3 - Google Trends Covid</h1>
<D3LineChart></D3LineChart>
<h1>D3 - Gesendete Beträge</h1>
<D3CBarChart></D3CBarChart>



</template>

<script>
import ChartsjsBarChart from "./components/ChartsjsBarChart.vue"
import ChartsjsLineChart from "./components/ChartsjsLineChart.vue"
import ApexBarChart from "./components/ApexBarChart.vue"
import D3LineChart from "./components/D3LineChart.vue"
import D3CBarChart from "./components/D3BarChart.vue"
/* import Box from "./components/Box.vue"
 */
export default {
  name: "App",
  components: {
    ChartsjsBarChart,
    ChartsjsLineChart,
    ApexBarChart,
    D3LineChart,
    D3CBarChart,
    /* Box */
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
