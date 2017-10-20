<template>
  <div class="per_body">
    <div class="avatars">
      <span class="per_avatar"><i class="iconfont icon-touxiang"></i></span>
      <p>
        <router-link to="ZhuCe">
          <span>注册</span>
        </router-link>

        /
        <router-link to="vuehe">
          <span>登录</span>
        </router-link>

        </p>
      <p class="logn_des">登录探物分享你的科技生活，探寻科技魅<br/>力，体验最新产品</p>
    </div>
    <div class="my_indent">
      <span>我的订单</span>
      <span>全部订单<i class="iconfont icon-202"></i></span>
          <router-link to="zuhe" class="box_shell">
          <span><i class="iconfont icon-fukuan"></i><p>待付款</p></span>
          <span><i class="iconfont icon-liwu"></i><p>已预约</p></span>
          <span><i class="iconfont icon-cshy-unSend"></i><p>发货中</p></span>
          <span><i class="iconfont icon-qingdan"></i><p>体验期</p></span>
          <span><i class="iconfont icon-daipingjia"></i><p>待评价</p></span>
        </router-link>
    </div>
    <div class="my_options">
      <div class="my_option">
        <p><i class="iconfont icon-koubeioff2x"></i><span>产品口碑</span></p>
        <p><span>0</span><i class="iconfont icon-202"></i></p>
      </div>
      <div class="my_option">
        <p><i class="iconfont icon-dianzankongxin"></i>收藏的产品</p>
        <p><span>0</span><i class="iconfont icon-202"></i></p>
      </div>
      <div class="my_option">
        <p><i class="iconfont icon-youhuiquan"></i>优惠券</p>
        <p><span>0</span><i class="iconfont icon-202"></i></p>
      </div>
    </div>
    <div class="my_options">
      <div class="my_option">
        <p><i class="iconfont icon-zhimaxinyong"></i>芝麻信用</p>
        <p><span></span><i class="iconfont icon-202"></i></p>
      </div>
      <div class="my_option">
        <p><i class="iconfont icon-weizhi"></i>地址管理</p>
        <p><span></span><i class="iconfont icon-202"></i></p>
      </div>
      <div class="my_option">
        <p><i class="iconfont icon-shuangren"></i>帮助中心</p>
        <p><span></span><i class="iconfont icon-202"></i></p>
      </div>
      <div class="my_option">
        <p><i class="iconfont icon-liwu"></i>分享好友领券</p>
        <p><span></span><i class="iconfont icon-202"></i></p>
      </div>
      <div class="my_option my_option_last">
        <p><i class="iconfont icon-shezhi"></i>设置</p>
        <p><span></span><i class="iconfont icon-202"></i></p>
      </div>
    </div>

    <twfooter></twfooter>
  </div>




</template>

<script type="text/ecmascript-6">
  import twfooter from "../common/twfooter.vue";

  export default {
    components:{
      twfooter
    }

  }

</script>

<style scoped>
  .per_body{
    width: 100%;
    background: #f2f2f2;
    padding-bottom: 0.8rem;
  }
  .avatars{
    width: 100%;
    background: #0f4256;
    text-align: center;
    font-size: 0.18rem;
    color: #cdcdcd;
    padding:0.4rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .avatars .per_avatar i{
    font-size: 0.8rem;
    color: #e1e1e1;
  }
  .avatars .logn_des{
    font-size: 0.1rem;
  }
  .my_indent{
    width: 100%;
    padding: 5%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffffff;
    margin-top: 0.1rem;
    font-size: 0.14rem;
    display: flex;
    flex-wrap: wrap;
  }
  .my_indent>span:nth-of-type(1),.my_indent>span:nth-of-type(2){
    width: 50%;
    margin-bottom:0.2rem;
  }
  .my_indent>span:nth-of-type(2){
    text-align: right;
    color: #888888;
  }
  .my_options{
    width: 100%;
    background: #ffffff;
    margin-top: 0.1rem;
  }
  .my_option{
    width: 95%;
    border-bottom: 1px solid #cdcdcd;
    margin-left: 5%;
    padding: 2% 5%;
    padding-left: 0%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffffff;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
  }
  .my_option p:nth-of-type(1){
    width: 50%;
  }
  .my_option p:nth-of-type(1) i{
    margin-right: 5%;
    font-size: 0.14rem;
    color: #000000;
  }
  .my_option p:nth-last-of-type(1){
    width: 50%;
    text-align: right;
  }
  .my_option p:nth-last-of-type(1) i{
    margin-left: 10%;
    color: #888888;
    font-weight: 600;
  }
  .my_option_last{
    border-bottom: none;
  }
  .box_shell{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .box_shell>span{
    text-align: center;
  }
  .box_shell>span>i{
    font-size: 0.22rem;
  }

p span{
  color:white;
}





</style>
