<template>
  <div>
    <zhu-header></zhu-header>
   <zhu-section></zhu-section>
    <zhu-footer></zhu-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import ZhuHeader from "./ZhuHeader.vue";
  import ZhuSection from "./ZhuSection.vue";
  import ZhuFooter from "./ZhuFooter.vue";
  export default {
    components:{
      ZhuHeader,
      ZhuSection,
      ZhuFooter
    }
  }
</script>

<style scoped>
div{
  background: #1aaa93;
}
</style>
