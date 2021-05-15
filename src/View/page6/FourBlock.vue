<template>
  <div class="FourBlock">
    <slot></slot>
  </div>
</template>

<script>
import Block from "./Block";
export default {
  name: "FourBlock",
  components: {Block}
}
</script>

<style scoped>
.FourBlock {
  display: flex;
  padding: 0 5%;
  box-sizing: border-box;
}
</style>
