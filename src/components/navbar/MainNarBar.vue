<template>
  <NarBar :senddata="senddata"></NarBar>
</template>

<script>
import NarBar from "./NarBar";
import narbardata from "./narbardata.json"

export default {
  name: "MainNarBar",
  components: {NarBar},
  data() {
    return {
      senddata: narbardata
    }
  }
}
</script>

<style scoped>

</style>
