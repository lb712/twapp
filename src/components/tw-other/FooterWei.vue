f<template>
  <div>
    <div id="footer">
      <ul class="ul1">
          <li><a href="#"><img src="../../assets/img/DuImg/1.jpg"/></a> </li>
          <li><a href="#"><img src="../../assets/img/DuImg/2.jpg"/></a> </li>
          <li><a href="#"><img src="../../assets/img/DuImg/3.jpg"/></a> </li>
      </ul>

      <ul class="ul2">
        <li><a href="#">还没有账号</a> </li>
        <li><a href="#">点击注册</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped>
  #footer{
    width:100%;
    height:2.47rem;
    position:relative;
    left:0px;
    top:0px;
  }
  .ul1{display: flex;
  justify-content: space-around;

  }
  .ul2 a{
    font-size:0.2rem;
  }
  .ul2{
    width:100%;
    display: flex;
    position:absolute;
    top:1rem;
    justify-content: space-around;
  }
</style>
