<template>
  <div>
    <div class="section">
        <input id="inpt" type="text" placeholder="手机号" />
      <input id="mima" type="text" placeholder="手机号" />
      <div style="clear: both;"></div>
      <ul>
        <li><a href="#">验证码登录</a></li>
          <li><a href="#">忘记密码?</a></li>
      </ul>
      <input type="button" value="登录" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    mounted (){
      document.getElementById("inpt").onblur=function () {
        var str=document.getElementById("inpt").value;
        var reg=/^1[0-9]{10}$/g;
        if(reg.test(str)){
          document.getElementById("inpt").style.color="#000";
        }else{
          console.log("手机号输入有误")
          document.getElementById("inpt").style.color="red"
        }

      }


      document.getElementById("mima").onblur=function () {
        var str2=document.getElementById("mima").value;
        var reg=/[0-9]|[a-z]{12}$/g;
        console.log(1)


        if(reg.test(str2)){

        }else{
          alert("密码输入有误")
          document.getElementById("mima").style.backgroundColor="red"
        }
      }


    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section{
      width:100%;
      height:3.09rem;
      position: relative;
      left:0px;
      top:0px;
    }
  [type="text"]{
    width:90%;
    height:0.6rem;
    background: #59aca2;
    margin-left:5%;
    font-size:0.4rem;
    margin-top:-0.4rem;
  }
  [type="button"]{
    width:90%;
    height:0.6rem;
    background: #59aca2;
    position: absolute;
    left:5%;
    color: #fff;
    top:2.3rem;
    font-size:0.2rem;
  }
    [type="text"]:nth-of-type(1){
      position: absolute;
      top:0.5rem;
    }
    [type="text"]:nth-of-type(2){
      position: absolute;
      top:1.12rem;
    }
    ul{
      position: relative;
      float: left;

      margin-top:0.7rem;
    }
  ul li a{
    font-size:0.2rem;
  }
    ul{
      width:85%;
      display: flex;
      justify-content: space-around;
    }
</style>
