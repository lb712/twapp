f<template>
  <div>
    <div id="header">
      <p><a href="#">X</a> </p>
      <ul>
        <li>探物</li>
        <li>关 注 最 好 玩 的 产 品</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  #header{
    width:100%;
    height:2.2rem;
  }
  p{
    height:0.1rem;
    float: left;
    margin-top:-0.6rem;
    margin-left:0.2rem
  }
  p a{
    font-size: 0.3rem;
    color: #fff;
  }
  ul li:nth-of-type(1){
    font-size:0.5rem;
    margin-left:1.5rem
  }
  ul li:nth-of-type(2){
    font-size:0.2rem;
    margin-left:1rem;
    margin-top:0.2rem;
  }
  ul li:nth-of-type(1){
    color: #fff;
  }
  ul li:nth-of-type(2){
    color: #fff;
  }
  ul{
    width:100%;
    float: left;
    margin-top:0.8rem;
  }

</style>
