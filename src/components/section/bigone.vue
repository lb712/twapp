<template>
    <div >
      <twheader></twheader>
      <swiperbig></swiperbig>
      <twfooter></twfooter>

    </div>
</template>

<script type="text/ecmascript-6">
      import swiperbig from "../tw-other/swiperbig.vue";
     import twheader from "../common/twheader.vue";
     import twfooter from "../common/twfooter.vue";


    export default {
      components:{
        swiperbig,
       twheader,
        twfooter,


      }
    }
</script>

<style scoped>

</style>
