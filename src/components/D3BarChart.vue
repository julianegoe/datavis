<template>
 <div id="bar-chart"></div>
</template>

<script>
import BarChart from "../charts/BarChart"
export default {
    name: "D3CBarChart",
    data() {
   return {
       data: [
           ["Montag", 100],
           ["Dienstag", 89],
           ["Mittwoch", 70],
           ["Donnerstag", 120],
           ["Freitag", 89],
       ]
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
     new BarChart({data: this.data, element: document.querySelector("#bar-chart")})
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
