<template>
  <div class="page">
    <Title class="title" :title="senddata.h3" color="black"></Title>
    <FourBlock class="FourBlock">
      <Block v-for="item in senddata.data" :key="item.h4" :senddata="item"></Block>
    </FourBlock>
  </div>
</template>

<script>
import Title from "../../components/title/Title";
import fourblockdata from "./fourblockdata.json";
import FourBlock from "./FourBlock";
import Block from "./Block";


export default {
  name: "Page5",
  components: {FourBlock, Block, Title},
  data() {
    return {
      senddata: fourblockdata
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
}

.FourBlock {
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, 0);
}
</style>
