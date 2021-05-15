<template>
  <div class="carousel_module">
    <ul class="carousel" :style="{marginLeft: '-'+Triggered+'00%'}">
      <li v-for="item in senddata">
        <img :src="item" alt="">
      </li>
    </ul>
    <ul class="button">
      <li v-for="(item, index) in senddata" :index="index"
          :style="{backgroundColor: Color(index)}"
          @click="change(index)"></li>
    </ul>
    <i class="left_button" @click="toLeft">&#xe665;</i>
    <i class="right_button" @click="toRight">&#xe666;</i>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      Triggered: 0
    }
  },
  props: {
    senddata: Array
  },
  methods: {
    Color(index) {
      if (this.Triggered == index) {
        return "white"
      }else {
        return "transparent"
      }
    },
    change(index) {
      this.Triggered = index;
    },
    toLeft() {
      this.Triggered = (this.Triggered + 4) % 5;
    },
    toRight() {
      this.Triggered = (this.Triggered + 1) % 5;
    }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  width: 500%;
  margin-left: 0;
  transition: .5s;
}

.carousel li {
  width: 20%;
}

img {
  width: 100%;
}

.button {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
}

.button li {
  float: left;
  margin: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 10px white;
}


i {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 50px;
  color: white;
  cursor: pointer;
  background-color: black;
  opacity: 0.2;
  /* visibility: hidden; */
}

.left_button {
  left: 50px;
}

.right_button {
  right: 50px;
}

</style>
