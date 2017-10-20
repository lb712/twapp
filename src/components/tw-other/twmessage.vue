<template>
  <div class="mes_body">
    <div class="mes_tit">我的消息</div>
    <div class="mes_con">
      <div class="mes_con_de" id="receive_praises">
        <span class="mes_con_del"><i class="iconfont icon-zan1"></i></span>
        <span class="mes_con_der">
          <p class="mes_con_derone">收到的赞</p>
          <p class="mes_con_dertwo">潜水状态无法获得赞哦</p>
        </span>
      </div>
      <div class="mes_con_de" id="criticisms">
        <span class="mes_con_del"><i class="iconfont icon-pinglun"></i></span>
        <span class="mes_con_der">
          <p class="mes_con_derone">评论</p>
          <p class="mes_con_dertwo">您暂无收到任何评论哦</p>
        </span>
      </div>

      <div>
      <router-link to="twmestalk">

        <div class="mes_con_de">
        <span class="mes_con_del"><i class="iconfont icon-kefu"></i></span>
        <span class="mes_con_der">
          <p class="mes_con_derone">探物客服</p>
          <p class="mes_con_dertwo">您暂时没有与客服联系</p>
        </span>
        </div>
      </router-link>
      </div>

      <div class="mes_con_de" id="informs">
        <span class="mes_con_del"><i class="iconfont icon-tongzhi"></i></span>
        <span class="mes_con_der">
          <p class="mes_con_derone">通知</p>
          <p class="mes_con_dertwo">有消息我们会第一时间通知您</p>
        </span>
      </div>
    </div>

    <twfooter></twfooter>


    <!--隐藏的探物客服页面-->


    <!--隐藏的收到的赞页面-->
    <div class="receive_praise" id="receive_praise">
      <div class="mes_tit mes_titsddz">
        <span class="receive_pr_back" id="receive_pr_back"><i class="iconfont icon-jikediancanicon13-copy-copy"></i></span>
        <span>收到的点赞</span>
      </div>
      <p class="part_con">您暂时没有收到任何点赞哦！</p>
    </div>


    <!--隐藏的评论页面-->
    <div class="receive_praise" id="criticism">
      <div class="mes_tit mes_titsddz">
        <span class="receive_pr_back" id="criticism_back"><i class="iconfont icon-jikediancanicon13-copy-copy"></i></span>
        <span>评论</span>
      </div>
      <p class="part_con">您暂时没有收到任何评论哦！</p>
    </div>


    <!--隐藏的通知页面-->
    <div class="receive_praise" id="inform">
      <div class="mes_tit mes_titsddz">
        <span class="receive_pr_back" id="inform_back"><i class="iconfont icon-jikediancanicon13-copy-copy"></i></span>
        <span>评论</span>
      </div>
      <p class="part_con">
        <i class="iconfont icon-tongzhi icon-tongzhi_y"></i><br/>
        您还没有通知消息哦！
      </p>
    </div>


  </div>

</template>

<script type="text/ecmascript-6">
  import twfooter from "../common/twfooter.vue";

  export default {
    components:{
      twfooter


    },


mounted(){



  //联系客服（隐藏）
  //document.getElementById("back_tito").onclick = function(){
  //  document.getElementById("link_kf_de").style.display="none";
  //}
  //document.getElementById("link_kf").onclick = function(){
  //  document.getElementById("link_kf_de").style.display="flex";
  //}
  //收到的赞（隐藏）
  document.getElementById("receive_pr_back").onclick = function(){
    document.getElementById("receive_praise").style.display="none";
  }
  document.getElementById("receive_praises").onclick = function(){
    document.getElementById("receive_praise").style.display="block";
  }
  //评论（隐藏）
  document.getElementById("criticism_back").onclick = function(){
    document.getElementById("criticism").style.display="none";
  }
  document.getElementById("criticisms").onclick = function(){
    document.getElementById("criticism").style.display="block";
  }
  //评论（隐藏）
  document.getElementById("inform_back").onclick = function(){
    document.getElementById("inform").style.display="none";
  }
  document.getElementById("informs").onclick = function(){
    document.getElementById("inform").style.display="block";
  }






}


  }

</script>

<style scoped>
  .mes_body{
    width: 100%;
  }
  .mes_tit{
    width: 100%;
    padding:0.1rem 0;
    background: #0f4256;
    font-size: 0.18rem;
    color: #ffffff;
    text-align: center;
    position: fixed;
    z-index: 10;
  }
  .mes_con{
    padding-top: 0.4rem;
    margin-bottom: 0.8rem;
    overflow-y: scroll;
    width: 100%;
    font-size: 0.18rem;
    background: #F7F7F7;
  }
  .mes_con .mes_con_de{
    width: 95%;
    margin-left: 5%;
    padding: 5% 0;
    border-bottom:1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
  }
  .mes_con .mes_con_de:nth-last-of-type(1){
    border-bottom: none;
  }
  .mes_con .mes_con_de .mes_con_del{
    width: 0.5rem;
    height: 0.5rem;
    background: #eeeeee;
    text-align: center;
    line-height: 0.5rem;
    font-weight: 600;
    border-radius: 50%;
    margin-right:5%;
  }
  .mes_con .mes_con_de .mes_con_del i{
    font-size: 0.3rem;
  }
  .mes_con .mes_con_de .mes_con_der{
    flex:1;
  }
  .mes_con .mes_con_de .mes_con_der .mes_con_derone{
    font-size: 0.18rem;
    font-weight: 600;
  }
  .mes_con .mes_con_de .mes_con_der .mes_con_dertwo{
    font-size: 0.16rem;
    color: #969896;
  }




  /*隐藏的-收到的赞、评论、通知*/
  .receive_praise{
    width: 100%;
    height: 100%;
    background: #fffdef;
    font-size: 0.16rem;
    position: fixed;
    top: 0;
    z-index: 60;
    display: none;
  }
  .mes_titsddz{
    position: relative;
  }
  .receive_pr_back{
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
    font-size:0.16rem;
  }
  .part_con{
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    color: #666666;
    margin: 1rem auto 0;
  }
  .icon-tongzhi_y{
    font-size: 0.6rem;
    font-weight: 600;
    color: #969896;
  }
  .send_kid i{
    margin-right: 5%;
    color: #404040;
    font-size: 0.2rem;
    line-height: 0.5rem;
    font-weight: 600;
  }
  .icon-kefu,.mes_con_derone{
    color: #000000;
  }


</style>
