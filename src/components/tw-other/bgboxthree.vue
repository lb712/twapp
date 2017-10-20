<template>
  <div >
    <div class="list">

      <zulinone :item="n" v-for="n in list" >{{n}}</zulinone>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import zulinone from "./zulinone.vue";

    export default {

      props:["list"],
      components:{
         zulinone
      }


    }
</script>

<style scoped>
.list{
  margin-bottom: 0.7rem;

}
</style>
