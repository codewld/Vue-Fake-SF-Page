<template>
  <div class="Column" @mouseover="isUp = true" @mouseout="isUp = false"
       :style="{backgroundImage: 'url('+senddata.url+')'}">
    <div class="imgDescribe" :class="{'up': isUp, 'down': !isUp}">
      <p class="num1">{{senddata.num1}}</p>
      <p class="des1">{{senddata.des1}}</p>
      <p class="num2">{{senddata.num2}}</p>
      <p class="des2">{{senddata.des2}}</p>
      <h4>{{senddata.h4}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Columns",
  props: {
    senddata: Object
  },
  data() {
    return {
      isUp: false
    }
  }
}
</script>

<style scoped>
.Column {
  /*width: 25%;*/
  /*height: 100%;*/
  flex: 1;
  position: relative;
}

.imgDescribe {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;

  transition: .5s;
}

.up {
  transform: translate(0, 0);
}

.down {
  transform: translate(0, 100%);
}


p, h4 {
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
}

h4 {
  bottom: 20%;

  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-weight: 400;
  color: white;
}

.num1 {
  bottom: 60%;

  font-size: 24px;
  color: rgb(220, 30, 50);
}

.des1 {
  bottom: 55%;

  font-size: 16px;
  color: white;
}

.num2 {
  bottom: 40%;

  font-size: 24px;
  color: rgb(220, 30, 50);
}

.des2 {
  bottom: 35%;

  font-size: 16px;
  color: white;
}
</style>
