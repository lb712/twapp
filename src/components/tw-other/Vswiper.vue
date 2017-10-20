<template>
  <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
        </div>
        <!-- Add Pagination -->

          <div class="swiper-pagination"></div>
          <div class="swiper-scrollbar"></div>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import TwHeader from "./TwHeader.vue"
    export default  {
      components:{
//        TwHeader
      },
      methods:{

      },
      mounted(){
        var a=["全部","待付款","已预约","发货中","体验期","待评价"];
        var swiper = new Swiper('.swiper-container', {
          autoHeight:true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (a[index]) + '</span>';

          },
          // 如果需要滚动条
          scrollbar: '.swiper-scrollbar',
          scrollbarHide:false,
          onSlideChangeStart: function(swiper){
            $(".swiper-pagination .swiper-pagination-bullet").eq(swiper.activeIndex).css({"color":"#24e9be","transform":"scale(1.15)"}).siblings().css({"color":"white","transform":"scale(1)"});

          }

        })

      }
    }
</script>

<style scoped>
  @import "../../assets/css/Vswiper.css";
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 5rem;
    padding-top: 0.33rem;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-scrollbar{
    position: absolute;
    width: 100%;
    top: 0.3rem;
    left: 0;
    height: 0.03rem;
    background: transparent;
  }
  .swiper-pagination{
    width:100%;
    height:0.33rem;
    position: absolute;
    top:0px;
    display: flex;
    justify-content: space-around;
    background: #11485d;
    line-height: 0.33rem;
  }

</style>
