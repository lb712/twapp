<template>
  <div id="querending">
    <!--头部-->
    <div id="header">
      <router-link to="/">
      <img id="back" src="../../assets/img/DuImg/back.jpg" alt="">
      </router-link>
      <span>确认订单</span>
      <img id="listen" src="../../assets/img/DuImg/listen.jpg" alt="">
    </div>
    <div id="boox">
      <!--suoni-->
      <div id="suoni" >
        <div id="xj">
          <img src="../../assets/img/DuImg/xj.jpg" alt="">
        </div>
        <div id="xq">
          <span>索尼DSC-RX100 M5 黑卡数码相机</span>
          <span>租赁时长： 0天</span>
          <span id="dj">查看包装清单</span>
        </div>
      </div>
      <!--包装清单-->
      <div>
        <div id="zzc"></div>
        <div id="bzqd">
        <span>
          <img src="../../assets/img/DuImg/bzqd.jpg" alt="">
          <p>包装清单</p>
        </span>
          <ul>
            <li>
              <span>电池</span>
              <span>*3</span>
            </li>
            <li>
              <span>电源适配器</span>
              <span>*1</span>
            </li>
            <li>
              <span>Mircro USE 连接线</span>
              <span>*1</span>
            </li>
            <li>
              <span>腕带</span>
              <span>*1</span>
            </li>
            <li>
              <span>挂件适配器</span>
              <span>*1</span>
            </li>
            <li>
              <span>64G存储卡</span>
              <span>*1</span>
            </li>
          </ul>
          <div id="close">
            知道了
          </div>
        </div>
      </div>

      <!--租赁日期-->
      <div id="zlrq">
        <ul>
          <li>
            <span>租赁日期</span>
            <span id="date">选择租赁日期</span>
            <span><img src="../../assets/img/DuImg/yjt.png" alt=""></span>
          </li>
          <li>
            <span>产品数量</span>
            <div id="jj">
              <span><img src="../../assets/img/DuImg/jian.png" alt=""></span>
              <span id="num">1</span>
              <span><img src="../../assets/img/DuImg/add.png" alt=""></span>
            </div>
          </li>
          <li>
            <span>运输方式</span>
            <span id="daofu">顺丰到付</span>
            <span><img src="../../assets/img/DuImg/yjt.png" alt=""></span>
          </li>
          <li>
            <span>收货地址</span>
            <span id="adress">陕西西安</span>
            <span><img src="../../assets/img/DuImg/yjt.png" alt=""></span>
          </li>
          <li>
            <span>选择优惠券</span>
            <span id="youhui">暂无可用优惠券</span>
            <span><img src="../../assets/img/DuImg/yjt.png" alt=""></span>
          </li>
        </ul>
      </div>

      <!--意外保险-->
      <div id="baoxian">
        <span><img src="../../assets/img/DuImg/bao.png" alt=""></span>
        <div id="yiwai">
          <span>意外保险  查看详情</span>
          <span>可免70%损坏维修费  (不含丢失、被盗)</span>
        </div>
        <span><img src="../../assets/img/DuImg/bao.png" alt=""></span>
      </div>
      <!--租金-->
      <div id="zj">
        <div id="zujin">
          <span>租金</span>
          <span>￥69.00</span>
        </div>
        <div id="ywb">
          <span>意外租金</span>
          <span>￥65.00</span>
        </div>
        <div id="yh">
          <span>优惠</span>
          <span>￥0.00</span>
        </div>
      </div>
      <!--芝麻信用-->
      <div id="zhima">
        <div id="zhima_t">
          <span>押金</span>
          <span>￥6500.00</span>
        </div>
        <div id="zhima_b">
          <span>芝麻信用减免</span>
          <span>立即绑定</span>
        </div>
      </div>
      <!--费用合计-->
      <div id="fyhjq">
        <div id="hjfy">
          <span>费用合计</span>
          <span id="zzjj">￥0.00</span>
        </div>
      </div>

    </div>

    <!--底部-->
    <div id="foot">
      <div id="foot_l">
        <div id="dzf">
          待支付：￥<span id="zjg">69.00</span>
        </div>
        <div id="yj">
          租金：￥<span id="f_zj">0.00</span>&nbsp;&nbsp;
          押金：￥<span>6500.00</span>
        </div>
      </div>
      <router-link to="zfdd" id="foot_r"><div>确认支付</div></router-link>

    </div>
  </div>
</template>

<script>
  import ShopCartService from "../../fetch/ShopCartService";
export default {
    data(){
      return{
        id:0,
        cartList:[]
      }
    },
    methods:{

      initData:function () {
        ShopCartService.getShopCartListByUser((data) => {
          this.cartList = data;
        })
      }

    },
    created:function () {
      this.initData();

    },


  mounted(){
    console.log('id: ' + this.$route.params.id);
    this.id=this.$route.params.id-1

    document.getElementById("dj").onclick=function(){
      document.getElementById("bzqd").style.transform="scale(1)";
      document.getElementById("zzc").style.display="block";
    }
    document.getElementById("close").onclick=function(){
      document.getElementById("bzqd").style.transform="scale(0)";
      document.getElementById("zzc").style.display="none";
    }
    document.getElementById("jj").firstElementChild.onclick=function(){
      var num=document.getElementById("num").innerHTML;
      num--;
      if(num<=0){
        num=1;
      }
      document.getElementById("num").innerHTML=num;
      var money=num*69.00;
      var money=money.toFixed(2);
      document.getElementById("zjg").innerHTML=parseInt(money)+Number("6500");
      document.getElementById("zzjj").innerHTML=parseInt(money)+Number("6500");
      document.getElementById("f_zj").innerHTML=money;
    }
    document.getElementById("jj").lastElementChild.onclick=function(){
      var num=document.getElementById("num").innerHTML;
      num++;
      document.getElementById("num").innerHTML=num;
      var money=num*69.00;
      var money=money.toFixed(2);
      document.getElementById("zjg").innerHTML=parseInt(money)+Number("6500");
      document.getElementById("zzjj").innerHTML=parseInt(money)+Number("6500");
      document.getElementById("f_zj").innerHTML=money;
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #querending{
    display: flex;
    flex-direction: column;

  }
  #boox{
    flex:1;
    overflow-y: scroll;
    margin-top:0.32rem ;
  }
  /*头部*/
  #header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #244a60;
    padding:0.13rem 0.1rem;
    position: fixed;
    left: 0;
    top: 0;
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
  /*索尼*/
  #suoni{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding:0.2rem;
    background: white;
  }
  #xj{
     width:20%;
   }
  #xj img{
    height:0.62rem;
    width:0.65rem;
  }
  #xq{
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #xq span:nth-child(1){
    display: block;
    font-size: 0.13rem;
  }
  #xq span:nth-child(2){
    display: block;
    font-size: 0.11rem;
    color: #414141;
  }
  #xq span:nth-child(3){
    display: block;
    font-size: 0.13rem;
    color: #6ee4bf;
  }
/*包装清单*/
  #bzqd{
    width:2.62rem;
    height:3.21rem;
    background: white;
    position: fixed;
    left:50%;
    top:22%;
    margin-left: -1.31rem;
    transform: scale(0);
    transition: .4s;
  }
  #zzc{
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    background: gray;
    opacity: .6;
    display: none;
  }
  #bzqd span img{
    width:0.35rem;
    height:0.3rem;
    margin:0 auto;
  }
  #bzqd span{
    display: block;
    font-size:0.13rem;
    text-align: center;
    margin-top: 0.15rem;
  }
  #bzqd span p{
    color: #e9a944;
    display: block;
    margin-top: 0.06rem;
  }
  #bzqd ul li{
    width:100%;
    height:0.28rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    color: black !important;
  }
  #bzqd ul{
    width:75%;
    margin:0 auto;
  }
  #close{
    width:2.1rem;
    height:0.43rem;
    background: #122b3a;
    font-size: 0.13rem;
    margin:0.2rem auto;
    text-align: center;
    line-height: 0.43rem;
    color: white;
  }

  /*租赁日期*/
  #zlrq ul li{
    width:100%;
    padding:0.16rem;
    font-size:0.13rem;
    color:#808080;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
  }
  #zlrq ul li img{
    width:0.23rem;
    height:0.21rem;
  }
  #zlrq{
    background: white;
    margin-top: 0.13rem;
  }
  #jj{
    display: flex;
    align-items: center;
    margin-right: 1.7rem;
  }
  #jj span:nth-child(1){
    margin-right: 0.1rem;
  }
  #jj span:nth-child(3){
    margin-left: 0.1rem;
  }
  #date{
    margin-right: 1rem;
  }
  #daofu{
    margin-right: 1.2rem;
  }
  #adress{
    margin-right: 1.2rem;
  }
  #youhui{
    margin-right: 1rem;
  }
  /*意外保险*/
  #baoxian{
    width:100%;
    background: white;
    padding:0.16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.13rem;
  }
  #baoxian img{
    width:0.28rem;
    height:0.25rem;
  }
  #yiwai{
    display: flex;
    flex-direction: column;
    margin-right: 0.6rem;
  }
  #yiwai span:nth-child(1){
    font-size: 0.14rem;
    color: #6ee4bf;
  }
  #yiwai span:nth-child(2){
    font-size: 0.12rem;
    color: #858585;
  }
  /*租金*/
  #zj{
    width: 100%;
    margin-top: 0.13rem;
    background: white;
    padding:0.16rem;
    border-bottom: 2px solid #f2f2f2;
  }
  #zj span{
    font-size: 0.14rem;
    color: #808080;
  }
  #zujin{
    display: flex;
    justify-content: space-between;
  }
  #zujin span:nth-child(2){
    color: black;
  }
  #ywb span:nth-child(2){
    color: black;
  }
  #ywb{
    display: flex;
    justify-content: space-between;
    margin:0.06rem 0rem;
  }
  #yh{
    display: flex;
    justify-content: space-between;
  }
  #yh span:nth-child(2){
    color: #e9a944;
  }
  /*底部*/
  #foot{
    width:100%;
    background: white;
    border-top: 2px solid #cdcdcd;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  #foot_l{
    width:60%;
    padding:0.1rem 0.15rem;
    padding-right: 0;
  }
  #dzf{
    font-size: 0.15rem;
    color: #16394a;
    padding-bottom: 0.04rem;
  }
  #yj{
    font-size: 0.11rem;
    color: #808080;
    padding-bottom: 0.06rem;
  }
  #foot_r{
    flex:1;
    background: #122b3a;
    font-size: 0.13rem;
    color: #9aa6ac;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*芝麻信用*/
  #zhima{
    width:100%;
    padding:0.1rem 0.15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    border-bottom: 2px solid #f2f2f2;
  }
  #zhima_t{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.1rem;
  }
  #zhima_t span{
    display: block;
    font-size:0.14rem;
    color: #808080;
  }
  #zhima_t span:nth-child(2){
    color: black;
  }
  #zhima_b span:nth-child(2){
    color: #6ee4bf;
  }
  #zhima_b{
    display: flex;
    justify-content: space-between;
  }
  #zhima_b span{
    display: block;
    font-size:0.14rem;
    color: #808080;
  }
  /*费用合计*/
  #fyhjq{
    width:100%;
    padding:0.1rem 0.15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    margin-bottom: 0.7rem;
  }
  #hjfy{
    display: flex;
    justify-content: space-between;
  }
  #hjfy span{
    /*display: block;*/
    font-size:0.14rem;
    color: #808080;
  }
  #hjfy span:nth-child(2){
    color: #000;
  }
 #foot{

 }

</style>

