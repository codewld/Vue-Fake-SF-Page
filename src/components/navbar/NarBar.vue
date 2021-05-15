<template>
  <div class="nav_container min_width">
    <a :href="Url">
      <img :src="imgUrl" :alt="imgAlt">
    </a>
    <ul v-for="(item, a, index) in NarDate" :key="item.ul.index" @mouseover="showColumn = item.ul.index" @mouseout="showColumn = -1">
      <a :href="item.ul.url">{{item.ul.name}}</a>
      <li v-for="i in item.li" class="dropDown" :class="{'show': isShow(item.ul.index), 'hide': !isShow(item.ul.index)}">
        <a :href="i.url">{{i.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NarBar",
  props: ["senddata"],
  data() {
    return {
      showColumn: -1
    }
  },
  methods: {
    isShow(index) {
      return index === this.showColumn;
    },
    change(i) {
      console.log(i)
    }
  },
  computed: {
    Url() {
      return this.senddata.Url
    },
    imgUrl() {
      return this.senddata.imgUrl
    },
    imgAlt() {
      return this.senddata.imgAlt
    },
    NarDate() {
      return this.senddata.NarDate
    }
  }
}
</script>

<style scoped>
@import url('main.css');
</style>
