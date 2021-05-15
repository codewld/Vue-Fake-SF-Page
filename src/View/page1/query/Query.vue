<template>
  <div class="query">
    <QueryBar class="QueryBar" :placeholder="querydata.placeholder" :words="querydata.words"></QueryBar>
    <QueryItem class="QueryItem" v-for="itemdata in itemdatas" :itemdata="itemdata" :key="itemdata.words"></QueryItem>
  </div>
</template>

<script>
import QueryBar from "./QueryBar";
import QueryItem from "./QueryItem";
import querydata from "../querydata.json"

export default {
  name: "Query",
  components: {QueryItem, QueryBar},
  data() {
    return {
      itemdatas: querydata,
      querydata: {
        placeholder: "支持粘贴运单号查询",
        words: "运单追踪"
      }
    }
  }
}
</script>

<style scoped>
.query {
  width: 100%;
  height: 120px;

  position: absolute;
  bottom: 0;

  padding: 30px 5% 0 5%;
  box-sizing: border-box;

  display: flex;

  background-color: rgba(249, 249, 249, 0.9);
}
</style>
