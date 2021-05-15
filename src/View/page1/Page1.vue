<template>
  <div>
    <BigImg></BigImg>
    <Query></Query>
  </div>
</template>

<script>
import BigImg from "./bigimg/BigImg";
import Query from "./query/Query";

export default {
  name: "Page1",
  components: {Query, BigImg}
}
</script>

<style scoped>
</style>
