<template>
  <div>
    <header-dome></header-dome>
      <hello-world></hello-world>
      <footer-wei></footer-wei>
  </div>

</template>

<script type="text/ecmascript-6">
  import HeaderDome from "./HeaderDome";
  import HelloWorld from "./HelloWorld.vue";
  import FooterWei from "./FooterWei.vue";

  export default {
    components:{
      HeaderDome,
      HelloWorld,
      FooterWei
    }
  }
</script>

<style scoped>
  div{
    background: #1aaa93;
  }
</style>
