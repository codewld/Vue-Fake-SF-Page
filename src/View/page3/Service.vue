<template>
  <div class="Service">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Service"
}
</script>

<style scoped>
.Service {
  display: flex;
  justify-content: center;
}
</style>
