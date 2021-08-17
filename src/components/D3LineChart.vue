<template>
 <div id="line-chart"></div>
</template>

<script>
import LineChart from "../charts/LineChart"
import filteredData from "../assets/filteredData"
export default {
    name: "D3CLineChart",
    data() {
   return {
       data: filteredData
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
      new LineChart({data: this.toDate(), element: document.querySelector("#line-chart")})
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

::v-deep(line)  {
    stroke-dasharray: 10;
    stroke: #EEEEEE;
    stroke-width: 5;
}

::v-deep(text) {
    display: none
}

::v-deep(.y, .axis) {
    display: none
}

::v-deep(.domain) {
    display: none
}

</style>
