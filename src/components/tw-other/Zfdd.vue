<template>
<div>
  <!--头部-->
  <div id="header">
    <router-link to="Qrdd"><img id="back" src="../../assets/img/DuImg/back.jpg" alt=""></router-link>

    <span>支付订单</span>
  </div>
  <!--time-->
  <div id="time">
    <div id="sysj">
      <span>剩余时间</span>
      <span id="showTime">30：00</span>
    </div>
    <p>请选择您的付款方式</p>
  </div>
  <!--支付-->
  <div id="pay">
    <div id="weixin">
      <span id="yq"><img id="dh1" src="../../assets/img/DuImg/dj.png" alt=""></span>
      <span><img src="../../assets/img/DuImg/zhifubao.png" alt=""></span>
      <span>微信支付</span>
      <span>微信用户支付每单减2元</span>
    </div>
    <div id="zhifubao">
      <span id="yqq"><img id="dh2" src="../../assets/img/DuImg/dj.png" alt=""></span>
      <span><img src="../../assets/img/DuImg/weixin.png" alt=""></span>
      <span>支付宝支付</span>
    </div>
  </div>
  <!--确认支付-->
  <router-link to="twperson">
    <div id="ok">
      确认
    </div>
  </router-link>
</div>
</template>

<script type="text/ecmascript-6">
    export default  {
      methods:{

      },
      mounted(){
        document.getElementById("yqq").onclick=function(){
          document.getElementById("dh1").style.display="none";
          document.getElementById("dh2").style.display="block";
        }
        document.getElementById("yq").onclick=function(){
          document.getElementById("dh1").style.display="block";
          document.getElementById("dh2").style.display="none";
        }
        $(function(){
          var m=29;
          var s=59;
          setInterval(function(){
            if(s<10){
              $('#showTime').html(m+':0'+s);
            }else{
              $('#showTime').html(m+':'+s);
            }
            s--;
            if(s<0){
              s=59;
              m--;
            }
          },100)
        })
      }
    }
</script>

<style scoped>
  /*头部*/
  #header{
    width: 100%;
    display: flex;
    align-items: center;
    background: #244a60;
    padding:0.13rem 0.1rem;
  }
  #header span{
    display: block;
    font-size: 0.16rem;
    color: white;
    margin-left: 1.2rem;
  }
  #back{
    width:0.15rem;
    height:0.2rem;
  }
  /*time*/
  #time{
    width:100%;
    background: #f2f2f2;
  }
  #sysj{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:0rem auto;
    padding-top: 0.22rem;
    margin-bottom: 0.22rem;
  }
  #sysj span:nth-child(1){
    display: block;
    font-size:0.13rem ;
    text-align: center;
    padding-bottom: 0.08rem;
  }
  #sysj span:nth-child(2){
    display: block;
    font-size: 0.2rem;
    text-align: center;
    font-weight: 800;
  }
  #time p{
    font-size: 0.14rem;
    text-align: center;
    padding-bottom: 0.25rem;
    color: #939293;
  }
  /*支付*/
  #pay{
    width:100%;
    background: white;
  }
  #weixin{
    display: flex;
    align-items: center;
    padding:0.17rem 0.15rem;
    border-bottom:1px solid #aaaaaa;
  }
  #zhifubao{
    display: flex;
    align-items: center;
    padding:0.17rem 0.15rem;
  }
  #pay img{
    width:0.29rem;
    height:0.25rem;
  }
  #yq{
    width:0.19rem;
    height:0.19rem;
    border:1px solid #e3e3e3;
    border-radius: 50%;
  }
  #yqq{
    width:0.19rem;
    height:0.19rem;
    border:1px solid #e3e3e3;
    border-radius: 50%;
  }
  #weixin span:nth-child(3){
    font-size: 0.14rem;
    margin-right: 0.1rem;
  }
  #zhifubao span:nth-child(3){
    font-size: 0.14rem;
    margin-right: 0.1rem;
  }
  #weixin span:nth-child(4){
    font-size: 0.11rem;
    color: #efb74c;
  }
  #weixin span:nth-child(2){
    margin:0 0.1rem;
  }
  #zhifubao span:nth-child(2){
    margin:0 0.1rem;
  }
  #yq img{
    width: 0.2rem;
    height:0.2rem;
  }
  #yqq img{
    width: 0.2rem;
    height:0.2rem;
    display: none;
  }
  #ok{
    width: 80%;
    height:0.45rem;
    background: #132b39;
    font-size:0.15rem;
    color: white;
    text-align: center;
    line-height: 0.45rem;
    margin:0.5rem auto;
  }
</style>
