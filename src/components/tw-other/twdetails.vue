<template>
  <div class="det_body">
    <div class="head_link">
      <router-link to="/">
        <span id="back_beforepage"><i class="iconfont icon-jikediancanicon13-copy-copy"></i></span>
      </router-link>
      <span><i class="iconfont icon-tianjia"></i><i class="iconfont icon-dianzankongxin"></i></span>


    </div>


    <div class="section_link" v-if="cartList">
      <div class="backtop" id="backtop"><i class="iconfont icon-chevron-copy-copy-copy"></i></div>
      <!--商品详情的轮播图-->
      <!--<div class="hello">-->
          <div class="swiper-container swiper01">
              <div class="swiper-wrapper wrapper-img01">
                  <div class="swiper-slide"><img :src="cartList[id].friendnum" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/img/img_details/phs_02.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/img/img_details/phs_03.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/img/img_details/phs_04.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/img/img_details/phs_05.jpg" alt=""></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination pagination01"></div>

              <!-- 如果需要导航按钮-->
            <!--<div class="swiper-button-prev"></div>-->
          <!--<div class="swiper-button-next"></div>-->

              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div>-->
          </div>
      <!--</div>-->

      <!--商品名字及简介-->
      <div class="products_nd">
        <h1 class="products_name">{{cartList[id].headimage}}</h1>
        <p class="products_intro">随机发黑色和白色运动款，42MM大小，如果有要求可与客服沟通，轻薄设计 续航更久的苹果2代运动手表。</p>
      </div>
      <div class="parameter">
        <p class="stars"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>{{cartList[id].lastactivity}}</span>分</p>
        <p class="rent">起租价￥<span>{{cartList[id].experience}}</span>/天</p>
        <p class="appearance">外观<span>4.5</span>价格<span>4.6</span>实用性<span>4.7</span></p>
        <p class="pledge">押金：<span>{{cartList[id].groupid}}</span></p>
      </div>
      <div class="rent_day">
        <span><i class="iconfont icon-jishi"></i></span>
        <span>
          <p>请选择租赁天数</p>
          <p class="rent_cash">周租金&nbsp;&nbsp;￥<span>20.11</span>/天&nbsp;&nbsp;月租金&nbsp;&nbsp;￥<span>15.11</span>/天</p>
        </span>
        <span><i class="iconfont icon-202"></i></span>
      </div>
      <div class="sdc_else state">
        说明：
        <i class="iconfont icon-zhimaxinyong"></i>信用免贷
        <i class="iconfont icon-shandianpeisong"></i>极速提款
        <i class="iconfont icon-daodianziti"></i>自提
        <i class="iconfont icon-bao"></i>支持免赔
        <i class="iconfont icon-202"></i>
      </div>
      <div class="sdc_else discounts">
        优惠：
        <i class="iconfont icon-typecar"></i>满188减12元、满288减20元
        <i class="iconfont icon-202"></i>
      </div>
      <div class="sdc_else credit">
        芝麻信用：芝麻粉650分及以上减免押金
        <i class="iconfont icon-202"></i>
      </div>

      <div class="nul_box01"></div>
      <div class="sdc_else evaluation">
        <p>综合评分<span>4.6</span></p>
        <p>共<span>11</span>条口碑<i class="iconfont icon-202"></i></p>
      </div>
      <!--综合评分-->
      <div class="com_det">
        <a class="com_det_box" href="#">
          <div class="com_det_l">
            <div class="c_avatars_det"><img class="c_avatars" src="../../assets/img/img_details/avatars_01.jpg" alt=""><p class="c_avatars_na"><span class="co_name">TW60713928</span><br/><span class="co_day">2017年10月11日</span></p></div>
            <p class="c_stars"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
            <p class="c_appearance">外观<span>4.5</span>价格<span>4.6</span>实用性<span>4.7</span></p>
          </div>
          <div class="com_det_c">
            <img class="c_alr_exp" src="../../assets/img/img_details/alr_exp.png" alt="">
          </div>
          <div class="com_det_r">
            <i class="iconfont icon-zan1"></i><span>0</span>
          </div>
          <div class="com_det_b">
            还不错，东西还挺新的，想买的也可以租来体验一下。<br/>
            之前本来一直想买，租完后不想用了，但是这个软件挺好的。<br/>
          </div>
        </a>
        <a class="com_det_box" href="#">
          <div class="com_det_l">
            <div class="c_avatars_det"><img class="c_avatars" src="../../assets/img/img_details/avatars_02.jpg" alt=""><p class="c_avatars_na"><span class="co_name">罗罗诺亚.索隆</span><br/><span class="co_day">2017年10月08日</span></p></div>
            <p class="c_stars"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
            <p class="c_appearance">外观<span>5.0</span>价格<span>5.0</span>实用性<span>4.9</span></p>
          </div>
          <div class="com_det_c">
            <img class="c_alr_exp" src="../../assets/img/img_details/alr_exp.png" alt="">
          </div>
          <div class="com_det_r">
            <i class="iconfont icon-zan1"></i><span>0</span>
          </div>
          <div class="com_det_b">
            体验了一下，自我感觉还不错，有兴趣的可以试试。<br/>
            之前看见朋友在这里租来的，借来试了一下，感觉很好，值得推荐。<br/>
            以后还会来的。<br/>
          </div>
        </a>
        <div class="add_praise">
          <i class="iconfont icon-bi"></i><span>添加口碑</span>
        </div>
      </div>

      <div class="nul_box01"></div>
      <!--类似产品-->
      <div class="same_pr">
        <p class="same_prw">类似产品</p>
        <div class="swiper-container swiper02">
          <div class="swiper-wrapper wrapper-img01 wrapper-img02">
            <div class="swiper-slide swiper-sl01">
              <img src="../../assets/img/img_details/phs_01.jpg" alt="">
              <div class="wenzi_shell">
                <p class="si_stars_si"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
                <p class="si_appearance_si">Bose SoundLink Mini2蓝牙音响</p>
                <p class="si_appearelse_si">小巧体积强劲低音</p>
              </div>
            </div>
            <div class="swiper-slide swiper-sl01">
              <img src="../../assets/img/img_details/phs_02.jpg" alt="">
              <div class="wenzi_shell">
                <p class="si_stars_si"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
                <p class="si_appearance_si">Beoplay H8蓝牙耳机</p>
                <p class="si_appearelse_si">来自丹麦的轻奢</p>
              </div>
            </div>
            <div class="swiper-slide swiper-sl01">
              <img src="../../assets/img/img_details/phs_03.jpg" alt="">
              <div class="wenzi_shell">
                <p class="si_stars_si"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
                <p class="si_appearance_si">Apple Watch Series 2</p>
                <p class="si_appearelse_si">Apple Watch 2代</p>
              </div>
            </div>
            <div class="swiper-slide swiper-sl01">
              <img src="../../assets/img/img_details/phs_04.jpg" alt="">
              <div class="wenzi_shell">
                <p class="si_stars_si"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
                <p class="si_appearance_si">Bose SoundLink Mini2蓝牙音响</p>
                <p class="si_appearelse_si">小巧体积强劲低音</p>
              </div>
            </div>
            <div class="swiper-slide swiper-sl01">
              <img src="../../assets/img/img_details/phs_05.jpg" alt="">
              <div class="wenzi_shell">
                <p class="si_stars_si"><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i><i class="iconfont icon-xing"></i>&nbsp;&nbsp;<span>5.0</span>分</p>
                <p class="si_appearance_si">Apple Watch Series 2</p>
                <p class="si_appearelse_si">Apple Watch 2代</p>
              </div>
            </div>
          </div>
        </div>

        <!--商品详情-->
        <div class="pro_detlist">------------  商品详情  ------------</div>
        <div class="list_shift">
          <a href="#">商品信息</a>
          <a href="#">规则说明</a>
        </div>
        <div class="same_prl">
          <img class="bigpho" src="../../assets/img/img_details/products_01.jpg" alt="">
          <p>----细节展示----</p>
          <img class="bigpho" src="../../assets/img/img_details/products_02.jpg" alt="">
          <p>内置GPS、50米防水1、新双核处理器。<br/>Apple Watch Series 2 为你的各种运动方式而精心设计，并满载各种功能，不仅可以帮助你保持活力，充满动力，还可以让你与亲友紧密联系。</p>
          <img class="bigpho" src="../../assets/img/img_details/products_03.jpg" alt="">
          <p>先进的运动追踪器<br/>健身记录圆环、随身教练、健身记录分享</p>
          <img class="bigpho" src="../../assets/img/img_details/products_04.jpg" alt="">
          <p>出类拔萃的运动手表<br/>内置GPS、心率传感器、50米防水、全面的体能训练App</p>
          <img class="bigpho" src="../../assets/img/img_details/products_05.jpg" alt="">
          <p>全天候助力<br/>APP通知提醒、自定义表盘、App Dock、Siri帮你做更多<br/><br/><br/>----<br/>END</p>
          <img class="bigpho" src="../../assets/img/img_details/products_06.jpg" alt="">
          <p>想了解更多<br/>不如来次亲身体验</p>
          <img class="tw_logo01" src="../../assets/img/img_details/tw_logo01.png" alt="">
        </div>


      </div>


    </div>


    <div class="foot_link">
      <router-link to="qrdd">
        <span class="orderrent">预约租赁</span>
      </router-link>
      <router-link to="twmestalk">
         <span class="linkservice">联系客服</span>
      </router-link>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import'../../assets/js/swiper.min.js'

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


      setTimeout( function() {

        var mySwiper = new Swiper('.swiper01', {
          loop: true,
          autoplay: 1000,
          autoplayDisableOnInteraction: false,

          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要前进后退按钮
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',
          // 如果需要滚动条
          // scrollbar: '.swiper-scrollbar',
        })

        var mySwiper = new Swiper('.swiper02', {
          slidesPerView: 2,
          onTransitionEnd: function (swiper) {
            if (swiper.progress == 1) {
              swiper.activeIndex = swiper.slides.length - 1
            }
          }
        })
      },100)





      /*回到顶部------------------------------------------------------------------*/
     // document.getElementById("backtop").onclick=function(){
     //   document.body.scrollTop=0;
     // }
     // window.onscroll=function(){
     //   var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
     //   /*回到顶部按钮*/
     //   if(scrollTop<=200){
     //     document.getElementById("backtop").style.display="none";
     ////   }else{
     //     document.getElementById("backtop").style.display="block";
     //   }

     // }


    }

  }

</script>

<style scoped>
   @import'../../assets/css/swiper.min.css';
       body {
             margin: 0;
             padding: 0;
       }
       .swiper01 {
                   width: 100%;
                   height: 2rem;
                   margin: 0 auto;
       }
       .wrapper-img01 img{
         width: 100%;
         height: 100%;
       }
       .pagination01{
         bottom:0;
       }
       .swiper-sl01{
         font-size:0.16rem;
         margin:0 0.01rem;
       }
       .wenzi_shell{
         width:100%;
         padding:0.1rem;
         box-sizing: border-box;
         white-space: nowrap;
         overflow: hidden;
         text-overflow-ellipsis: ellipsis;
         text-align: center;
       }
       .wenzi_shell .si_stars_si{
         color: #df5000;
       }
       .wenzi_shell .si_appearelse_si{
         color: #969896;
       }
  .det_body{
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    display:flex;
    flex-direction:column;
  }
  .head_link{
    width: 100%;
    height: 0.5rem;
    opacity: 0.8;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    /*align-content: cenetr;*/
    z-index: 10;
  }
  .head_link span{
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
  }
   .head_link #back_beforepage{
     justify-content: flex-start;
     padding:0.15rem;
   }

   .head_link>span{
     justify-content: flex-end;
   }
  .head_link span i{
    font-size:0.16rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 10%;
  }
   .products_nd {
     width:100%;
     padding: 2%;
     box-sizing: border-box;
   }
  .products_nd .products_name{
    font-size: 0.16rem;
  }
   .products_nd .products_intro{
     font-size: 0.12rem;
     margin-top: 0.1rem;
   }
   .parameter{
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     padding: 2%;
     box-sizing: border-box;
   }
   .parameter p{
     width: 50%;
     display: flex;
     justify-content: flex-start;
     align-items:center;
     font-size: 0.12rem;
   }
   .parameter p:nth-of-type(2n){
     justify-content: flex-end;
   }
   .parameter .stars{
     color: darkgoldenrod;
   }
   .parameter .rent span{
     font-size: 0.26rem;
     font-weight: 600;
   }
   .parameter .appearance{
     color: #969896;
   }
   .parameter .appearance span{
     margin-right:3%;
   }
   .parameter .pledge{
     text-decoration-line: line-through;
     color: #969896;
   }
   .rent_day{
     width:90%;
     padding: 2%;
     margin-bottom: 1rem;
     box-sizing: border-box;
     background: #eeeeee;
     border: 1px solid #cccccc;
     -webkit-border-radius: 0.05rem;
     -moz-border-radius: 0.05rem;
     border-radius: 0.05rem;
     margin:0.1rem auto;
     font-size: 0.16rem;
     display: flex;
     justify-content: space-between;
   }
   .rent_day span{
     flex:1;
   }
   .rent_day span:nth-of-type(2){
     flex:9;
   }
   .rent_day>span:nth-of-type(1),.rent_day>span:nth-last-of-type(1){
     display: flex;
     align-items:center;
   }
   .rent_day span .rent_cash{
     font-size: 0.1rem;
     color:#666666;
   }
   .sdc_else{
     width:100%;
     padding:0.1rem;
     box-sizing: border-box;
     border-top:1px solid #cccccc;
     font-size: 0.12rem;
   }
   .sdc_else i{
     color: #55a532;
     font-weight: 600;
   }
   .sdc_else .icon-202{
     float: right;
     color: #969896;
     font-size: 0.2rem;
   }
   .state i{
     font-size: 0.1rem;
   }
   .credit{
     border-bottom:1px solid #cccccc;
   }
   .nul_box01{
     width:100%;
     height:0.1rem;
     background: #afacac;
   }
   .evaluation{
     display:flex;
     justify-content: space-between;
     color: #666666;
     border-bottom:1px solid #969896;
   }
   .evaluation p:nth-of-type(1){
     color: #df5000;
   }
   .com_det .com_det_box{
     width:100%;
     display: flex;
     flex-wrap: wrap;
     padding: 3%;
     box-sizing: border-box;
     border-bottom: 1px solid #969896;
   }
   .com_det .com_det_box .com_det_l{
     width:60%;
     font-size: 0.16rem;
   }
   .com_det .com_det_box .com_det_l .c_avatars_det{
     width: 100%;
     display: flex;
     color: #969896;

   }
   .com_det .com_det_box .com_det_l .c_avatars_det .c_avatars{
     width:0.4rem;
     height:0.4rem;
     border-radius: 50%;
     margin-right:3%;
   }
   .com_det .com_det_box .com_det_l .c_avatars_det .c_avatars_na{
     flex: 1;
     font-size: 0.12rem;
   }
    .com_det .com_det_box .com_det_l .c_avatars_det .c_avatars_na .co_name{
      color: #000;
      font-size: 0.14rem;
      font-weight:600;
    }
    .com_det .com_det_box .com_det_l .c_stars{
      color: #df5000;
    }
   .com_det .com_det_box .com_det_l .c_appearance{
     color: #969896;
   }
   .com_det .com_det_box .com_det_l .c_appearance span{
     margin-right: 5%;
     font-size: 0.1rem;
   }
   .com_det .com_det_box .com_det_c{
     width:30%;
   }
   .com_det .com_det_box .com_det_c .c_alr_exp{
     width:70%;
   }
   .com_det .com_det_box .com_det_r{
     width:10%;
     font-size: 0.16rem;
     padding-top: 0.2rem;
     color: #969896;
   }
   .com_det .com_det_box .com_det_b{
     width:100%;
     margin-top: 0.05rem;
     font-size: 0.12rem;
     color: #000000;
   }
   .com_det .add_praise{
     width: 96%;
     background: #000;
     -webkit-border-radius: 0.05rem;
     -moz-border-radius: 0.05rem;
     border-radius: 0.05rem;
     color: #ffffff;
     font-size: 0.14rem;
     margin: 0.1rem auto;
     padding:0.1rem;
     box-sizing: border-box;
     text-align: center;
   }
    .com_det .add_praise .icon-bi{
      margin-right:0.1rem;
    }
    .same_pr .same_prw{
      font-size: 0.14rem;
      margin:0.1rem;
    }
    .pro_detlist{
      width:100%;
      font-size: 0.1rem;
      color: #333333;
      padding: 0.1rem 0;
      background: #969896;
      text-align: center;
    }
    .same_pr .same_prl{
      width:100%;
      font-size: 0.1rem;
      text-align: center;
      line-height: 0.25rem;
      color: #333333;
    }
   .same_prl p{
     width:100%;
     padding:0.2rem 0.1rem;
     box-sizing: border-box;
   }
   .same_pr .same_prl .bigpho{
     width:100%;
   }
   .tw_logo01{
     width:10%;
     margin:0.2rem auto 0.5rem;
   }
  .section_link{
    flex: 1;
    width: 100%;
    background: #ffffff;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-bottom:0.5rem;
  }
  .backtop{
    position: fixed;
    bottom: 0.7rem;
    right:  0.2rem;
    width:0.5rem;
    height:0.5rem;
    background: #ffffff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 0 0.05rem 0.1rem 0 #000000;
    z-index: 8;
    justify-content: center;
    display: flex;
    align-items: center;
    display: none;
  }
  .backtop i{
    font-size:0.16rem;
    color: #404040;
  }
  .foot_link{
    width: 100%;
    height: 0.5rem;
    font-size: 0.14rem;
    border-top: 1px solid #333333;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    z-index: 10;
    text-align: center;



  }

   .foot_link .orderrent{
     background: #000000;
     color: #ffffff;
     display: inline-block;
     height: 0.3rem;
     width: 40%;
     text-align: center;
     border: 1px solid #404040;
     line-height: 0.3rem;
     margin-top: 0.1rem;


   }
   .linkservice{
     display: inline-block;
     height: 0.3rem;
     width: 40%;
     background: #fff;
     color: #000;
     text-align: center;
     line-height: 0.3rem;
     margin-top: 0.1rem;
     margin-left: 0.2rem;
     border: 1px solid #000000;

   }
  .list_shift{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #666666;

  }
   .list_shift a{
     flex:1;
     font-size: 0.12rem;
     color: #000000;
     text-align: center;
     padding: 0.05rem 0;
     margin: 0.1rem 0;
   }
   .list_shift a:nth-of-type(1){
     border-right:2px solid #404040;
   }

</style>
