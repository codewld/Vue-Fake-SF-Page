<template>
  <div>
    <h4>{{senddata.h4}}</h4>
    <p>{{senddata.p}}</p>
    <img :src="senddata.url" width=240px alt="">
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    senddata: Object
  }
}
</script>

<style scoped>
div {
  /*width: 280px;*/
  height: 350px;
  width: 20%;
  /*height: 30%;*/
  background-color: rgb(249, 249, 249);
  margin: 0 20px;
  padding: 25px 10px 25px;
  text-align: center;

  position: relative;

  overflow: hidden;

  flex-shrink: 0;
  flex-grow: 0;
}

h4 {
  font-size: 20px;
  margin-bottom: 25px;
}

p {
  font-size: 16px;
  margin-bottom: 25px;
}

div:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  transform: translate(-5px, -5px);
  transition: 0.5s;
}
</style>
