<template>
  <div class="bigimg">
    <img class="bigimg2" :src="imgurl2" alt="">
    <img class="bigimg1" src="../../../../static/img/bigimg1.jpg" alt="">

  </div>
</template>

<script>
export default {
  name: "BigImg",
  data() {
    return {
      // imgurl1: require("../../../../static/img/kouhao.png"),
      imgurl2: "../../../../static/img/kouhao.png"
    }

  }
}
</script>

<style scoped>
.bigimg1 {
  width: 100%;
}

.bigimg2 {
  width: 50%;
  position: absolute;
  top: 20%;
  right: 0;
  left: 0;
  margin: auto;
}
</style>
