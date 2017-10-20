<template>
  <div>
    <div id="header">
      <router-link to="/"><img id="back" src="../assets/img/DuImg/back.jpg" alt=""></router-link>
      <router-link to="Vswiper"><span>{{}}</span></router-link>
      <img id="listen" src="../assets/img/DuImg/listen.jpg" alt="">
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
    export default  {
      
    }
</script>

<style scoped>
  /*头部*/
  #header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #11485d;
    padding:0.13rem 0.1rem;
  }
  #header span{
    display: block;
    font-size: 0.16rem;
    color: white;
  }
  #back{
    width:0.15rem;
    height:0.2rem;
  }
  #listen{
    width:0.22rem;
    height:0.22rem;
  }
</style>
