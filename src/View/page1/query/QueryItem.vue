<template>
  <div>
    <a class="item" :href="itemdata.url">
      <span v-html="itemdata.icon"></span>
      {{ itemdata.words }}
    </a>
  </div>
</template>

<script>
export default {
  name: "QueryItem",
  props: {
    itemdata: Object
  }
}
</script>

<style scoped>
div {
  flex: 1;
  text-align: center;
}
.item {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  vertical-align: middle;
}

span {
  height: 64px;
  line-height: 64px;
  font-size: 42px;
  vertical-align: middle;
}
</style>
