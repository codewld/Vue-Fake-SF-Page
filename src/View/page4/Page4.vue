<template>
  <div>
    <Title class="title" :title="fourcolumnsdata.h3" color=""></Title>
    <FourColumns :title="fourcolumnsdata.h3" color="">
      <Columns v-for="item in fourcolumnsdata.data" :senddata="item" :key="item.h4"></Columns>
    </FourColumns>
  </div>

</template>

<script>
import FourColumns from "./FourColumns";
import Columns from "./Columns";
import fourcolumnsdata from "./fourcolumnsdata.json"
import Title from "../../components/title/Title";

export default {
  name: "Page4",
  components: {Columns, FourColumns, Title},
  data() {
    return {
      fourcolumnsdata: fourcolumnsdata
    }
  }
}
</script>

<style scoped>
div {
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
