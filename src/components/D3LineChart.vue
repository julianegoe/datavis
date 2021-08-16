<template>
 <div id="line-chart"></div>
</template>

<script>
import chartData from "../assets/data.json"
import LineChart from "../charts/LineChart"
export default {
    name: "D3CLineChart",
    data() {
   return {
       data: chartData
   };
 },
 methods: {
     toDate: function() {
         const newData = this.data.map(element => {
             return {...element, Tag: Date.parse(element.Tag)}
         })
         return newData
     }

 },
 mounted() {
     const chart = new LineChart({data: this.toDate(), element: document.querySelector("#line-chart")})
     chart.setColor( "blue" )
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
