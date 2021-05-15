<template>
  <PageNav>
    <PageNarItem path="/page1">
      <p>①</p>
    </PageNarItem>
    <PageNarItem path="/page2">
      <p>②</p>
    </PageNarItem>
    <PageNarItem path="/page3">
    <p>③</p>
    </PageNarItem>
    <PageNarItem path="/page4">
      <p>④</p>
    </PageNarItem>
    <PageNarItem path="/page5">
      <p>⑤</p>
    </PageNarItem>
    <PageNarItem path="/page6">
      <p>⑥</p>
    </PageNarItem>
  </PageNav>
</template>

<script>
import PageNav from "./PageNav";
import PageNarItem from "./PageNarItem";

export default {
  name: "MainPageNav",
  components: {
    PageNarItem,
    PageNav
  }
}
</script>

<style scoped>

</style>
