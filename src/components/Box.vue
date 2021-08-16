<template>
 <div class="box-container">
     <div class="box">
       <slot></slot>
     </div>
 </div>
</template>

<script>

export default {
    name: "Box",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.box {
    grid-column: 1 / span 1 ;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
}

</style>
