<template>
  <div class="page" :style="{backgroundImage: 'url('+senddata.imgUrl+')'}">
    <Title class="title" :title="senddata.h3" color="black"></Title>
    <Service class="Service1">
      <ServiceItem v-for="item in senddata.data1" :key="item.words" :senddata="item"></ServiceItem>
    </Service>
    <Service class="Service2">
      <ServiceItem v-for="item in senddata.data2" :key="item.words" :senddata="item"></ServiceItem>
    </Service>
  </div>
</template>

<script>
import Title from "../../components/title/Title";
import Service from "./Service";
import ServiceItem from "./ServiceItem";
import page3data from "./page3data.json"
export default {
  name: "Page3",
  components: {Service, ServiceItem, Title},
  data() {
    return {
      senddata: page3data
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.Service1 {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
}

.Service2 {
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, 0);
}

.title {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
}
</style>
