<template>
  <div class="Block">
    <div class="img">
      <a :href="senddata.url" @mouseover="isGrow = true" @mouseout="isGrow = false">
        <img :src="senddata.imgUrl" alt="" :class="{'grow': isGrow, 'shrink': !isGrow}">
      </a>
    </div>
    <p>{{senddata.p}}</p>
    <a :href="senddata.url" class="words" @mouseover="isGrow = true" @mouseout="isGrow = false">
      <h4>{{senddata.h4}}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: "Block",
  data() {
    return {
      isGrow: false
    }
  },
  props: {
    senddata: Object
  }
}
</script>

<style scoped>
.Block {
  margin: 1%;
}
p {
  margin: 5px;
  font-size: 14px;
  color: rgb(149, 149, 149);
}

h4 {
  margin: 5px;
  font-size: 18px;
}

.img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
}

.grow {
  transform: scale(1.5);
}

.shrink {
  transform: scale(1);
}
</style>
