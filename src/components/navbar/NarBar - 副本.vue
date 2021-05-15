<template>
  <div class="nav_container min_width">
    <a :href="Url">
      <img :src="imgUrl" :alt="imgAlt">
    </a>
    <ul v-for="item in NarDate"  @mouseover="show($event)" @mouseout="hide($event)">
      <a :href="item.ul.url">{{item.ul.name}}</a>
      <li v-for="i in item.li">
        <a :href="i.url">{{i.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NarBar",
  props: ["senddata"],
  methods: {
    show(event){
      let nodes = event.currentTarget.childNodes
      for (let i = 2; i < nodes.length; i++){
        nodes[i].style.display = "block";
      }
      console.log(nodes);
    },
    hide(event){
      let nodes = event.currentTarget.childNodes
      for (let i = 2; i < nodes.length; i++){
        nodes[i].style.display = "none";
      }
    },
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
