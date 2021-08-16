<template>
 <div id="bar-chart"></div>
</template>

<script>
import BarChart from "../charts/BarChart"
import filteredData from "../assets/filteredData"
export default {
    name: "D3CBarChart",
    data() {
   return {
       data: filteredData,
       options: {
           margin: {
               top: 20,
               bottom: 20,
               left: 50,
               right: 70
           }
       }
   };
 },
 methods: {
     toDate: function() {
         const newData = this.data.map(element => {
             return {...element, date: Date.parse(element.date)}
         })
         return newData
     }

 },
 mounted() {
    new BarChart(this.toDate(), document.querySelector("#bar-chart"), this.options)
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
