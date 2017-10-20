<template>

  <div class="link_kf_de" id="link_kf_de">
    <div class="back_tit">
      <router-link to="twmessage" class="back_tito" id="back_tito">
        <i class="iconfont icon-jikediancanicon13-copy-copy"></i>
      </router-link>
      <span class="back_titt">探物小助手 06</span>
    </div>
    <div class="back_talk" id="back_talk">
      <span class="que_talk">欢迎你，这里是探物在线帮助，请问有什么可以帮忙的吗？</span>
    </div>
    <div class="back_bottom">
      <textarea class="send_text" id="send_text" type="text" placeholder="发送消息"></textarea>
      <div class="op_turr">
          <span class="send_kid">
            <i class="iconfont icon-daodianziti"></i>
            <i class="iconfont icon-daipingjia"></i>
            <i class="iconfont icon-xiangji-copy"></i>
            <i class="iconfont icon-tongzhi"></i>
          </span>
        <span class="send_msg" id="send_msg">
            <i class="iconfont icon-fenxiang"></i>
          </span>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
    export default {
      mounted(){

        function sendMsg(){
          var str = document.getElementById("send_text").value;
          document.getElementById("back_talk").innerHTML =  document.getElementById("back_talk").innerHTML +"<br/>"+"<br/>"+str;
          document.getElementById("send_text").value="";
        }

        window.onload = function(){
          document.getElementById("send_msg").onclick =sendMsg;

        }

        document.getElementById("send_text").onkeydown = function(event){
          var evt = event||window.event;
          if(evt.keyCode == 13){
            sendMsg();
          }
        }
      }
    }
</script>

<style scoped>
  .link_kf_de{
    width: 100%;
    height: 100%;
    background: #ffffff;
    font-size: 0.16rem;
    display: flex;
    flex-direction: column;
  }
  .back_tit{
    width: 100%;
    padding:0.1rem 0 0.2rem;
    background: #eeeeee;
    border-bottom: 1px solid #969896;
    font-size: 0.2rem;
    display: flex;
  }
  .back_tit .back_tito{
    width: 0.5rem;
    text-align: center;
    font-size: 0.24rem;
  }
  .back_tit .back_titt{
    flex:1;
    text-align: center;
    text-indent: -0.5rem;
  }
  .back_talk{
    width: 100%;
    padding-top: 0.1rem;
    padding-bottom: 1.1rem;
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: right;
    color: #007aff;
    font-weight: 600;
    line-height: 0.3rem;
    padding-left: 10%;
    padding-right: 10%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .back_talk .que_talk{
    display: block;
    width: 100%;
    margin-top:0.2rem;
    text-align: left;
    color: #000000;
  }

  .back_bottom{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    z-index: 15;
  }
  .send_text{
    width: 100%;
    border: none;
    outline-style: none;
    resize: none;
    font-size: 0.16rem;
    padding:0.16rem 0.16rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .op_turr{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:0 0.2rem 0.2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .send_kid{
    flex: 1;
  }
  .send_kid i{
    margin-right: 5%;
    color: #404040;
    font-size: 0.2rem;
    line-height: 0.5rem;
    font-weight: 600;
  }
  .send_msg{
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    color: #404040;
    background: #969896;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

</style>
