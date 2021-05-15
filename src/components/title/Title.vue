<template>
  <h3 :style="{ color: color}">{{title}}</h3>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    color: {
      type: String,
      default: "white"
    }
  }
}
</script>

<style scoped>
h3 {
  z-index: 1;
  color: white;
  font-size: 35px;
  font-weight: 400;
}
</style>
