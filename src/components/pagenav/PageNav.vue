<template>
  <div id="PageNav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageNav"
}
</script>

<style scoped>
  #PageNav {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    position: fixed;
    right: 30px;
    bottom: 0;
    height: 100%;
  }
</style>
