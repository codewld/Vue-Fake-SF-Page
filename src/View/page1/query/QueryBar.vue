<template>
  <div class="QueryBar">
    <input type="text" id="search_bar" :placeholder="placeholder" @focus="onfocus" @blur="onblur">
    <label for="search_bar">&#xe611;  {{words}}</label>
    <i v-show="isShow">&#xe651;</i>
  </div>
</template>

<script>
export default {
  name: "QueryBar",
  data() {
    return {
      isShow: false
    }
  },
  props: {
    placeholder: String,
    words: String
  },
  methods: {
    onfocus() {
      this.isShow = true;
      console.log(this.isShow);
    },
    onblur(){
      this.isShow = false;
      console.log(this.isShow);
    }
  }
}
</script>

<style scoped>
.QueryBar {
  position: relative;
  width: 300px;
  height: 60px;
}

input {
  width: 100%;
  height: 100%;
  padding-left: 120px;
  box-sizing: border-box;
  outline: none;
}

label {
  position: absolute;
  left: 10px;

  font-size: 20px;
  font-weight: 700;
  line-height: 60px;
}

i {
  position: absolute;
  right: 15px;
  font-size: 24px;
  line-height: 60px;
}
</style>
