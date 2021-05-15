<template>
  <div class="ServiceItem">
    <a :href="senddata.url">
      <img :src="senddata.imgUrl" alt="">
      <p>{{senddata.words}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    senddata: Object
  }

}
</script>

<style scoped>
.ServiceItem {
  width: 100px;
  height: 150px;
  overflow: hidden;
  text-align: center;

  margin-left: 70px;
  margin-right: 70px;
}

img {
  width: 100%;
}
p {
  margin-top: 10px;
  font-size: 18px;
}
</style>
