<template>
  <div class="FourBlock">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FourBlock"
}
</script>

<style scoped>
.FourBlock {
  display: flex;
  padding: 0 5%;
  box-sizing: border-box;
}
</style>
