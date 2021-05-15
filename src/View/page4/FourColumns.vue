<template>
  <div class="FourColumns">
    <slot></slot>
  </div>
</template>

<script>
import Title from "../../components/title/Title";
export default {
  name: "FourColumns",
  components: {Title}
}
</script>

<style scoped>
.FourColumns {
  display: flex;
}
</style>
