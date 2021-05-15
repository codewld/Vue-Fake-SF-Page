<template>
  <div>
    <Title class="title" :title="newsData.h3" color="black"></Title>
    <FourBlock class="FourBlock">
      <Block v-for="item in newsData.data" :key="item.p" :senddata="item"></Block>
    </FourBlock>
  </div>
</template>

<script>
import Title from "../../components/title/Title";
import newsData from "./newsdata.json"
import FourBlock from "./FourBlock";
import Block from "./Block";

export default {
  name: "Page6",
  components: {Block, FourBlock, Title},
  data() {
    return {
      newsData: newsData
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
  top: 40%;
}
</style>
