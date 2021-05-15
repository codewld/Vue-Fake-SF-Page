<template>
  <div class="page">
    <Title class="title" :title="senddata.h3" color="black"></Title>
    <Carousel :senddata="senddata.data"></Carousel>
  </div>
</template>

<script>
import Title from "../../components/title/Title";
import carouseldata from "./carouseldata.json"
import Carousel from "./Carousel";
export default {
  name: "Page2",
  components: {Carousel, Title},
  data() {
    return {
      senddata: carouseldata
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
}

</style>
