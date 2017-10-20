<template>
  <div>
    <div class="section">
        <input id="inpt" type="text" placeholder="手机号" />
      <input id="yanzheng" type="text" placeholder="验证码：12345" />
        <input id="mima" type="password" placeholder="密码" />

      <input type="button" value="继续" />
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
      document.getElementById("yanzheng").onblur=function(){
        var str1=document.getElementById("yanzheng").value;
        if(str1==12345){
          document.getElementById("yanzheng").style.color="#000";
        }else{
          console.log("验证输入有误")
          document.getElementById("yanzheng").style.color="red"
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
    height:4rem;
    position: relative;
    top:0rem;
  }
  [type="text"]:nth-of-type(1){
    width:90%;
    height:0.6rem;
    background: #61bbaf;
    margin-left:5%;
    position: absolute;
    top:0.6rem;
  }
  [type="text"]:nth-of-type(2){
    width:90%;
    height:0.6rem;
    background: #61bbaf;
    margin-left:5%;
    position: absolute;
    top:1.2rem;
  }
  [type="password"]{
    width:90%;
    height:0.6rem;
    background: #61bbaf;
    margin-left:5%;
    font-size:0.2rem;
    position: absolute;
    top:1.8rem;
  }

  [type="button"]{
    width:90%;
    height:0.6rem;
    background: #61bbaf;
    margin-left:5%;
    font-size:0.2rem;
    color: #fff;
    position: absolute;
    top:3rem;
  }
  input{
    font-size:0.2rem;
  }
</style>
