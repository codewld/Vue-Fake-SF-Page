<template>
  <div class="PageNarItem" @click="itemClick" :style=activeStyle>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageNarItem",
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      // 当前的路径中没有出现path时，indexOf返回-1
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? {color: "red"} : {};
    }
  }
}
</script>

<style scoped>
.PageNarItem {
  height: 30px;
  text-align: center;
}

p {
  cursor: pointer;
}
</style>
