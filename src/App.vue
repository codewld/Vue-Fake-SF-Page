<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, minimum-scale=0.1">
    <MainNarBar></MainNarBar>
    <router-view/>
    <MainPageNav></MainPageNav>
  </div>
</template>

<script>
import MainNarBar from "./components/navbar/MainNarBar";
import MainPageNav from "./components/pagenav/MainPageNav";
export default {
  name: 'App',
  components: {MainPageNav, MainNarBar}
}
</script>

<style>
@import url("./assets/css/base.css");
@import url("./assets/css/font.css");

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
