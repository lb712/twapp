<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div id="kx">
            <img src="../../assets/img/DuImg/kaixiang.png" alt="">
            <img src="../../assets/img/DuImg/kaixiang.png" alt="">
            <img src="../../assets/img/DuImg/kaixiang.png" alt="">
          </div>
          <div id="cy">
            <img src="../../assets/img/DuImg/cy.png" alt="">
            <img src="../../assets/img/DuImg/cy.png" alt="">
            <img src="../../assets/img/DuImg/cy.png" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sj">
            <img src="../../assets/img/DuImg/sjdd.png" alt="">
            <img src="../../assets/img/DuImg/sjdd.png" alt="">
            <img src="../../assets/img/DuImg/sjdd.png" alt="">
          </div>
        </div>
      </div>
      <!-- Add Pagination -->

      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar"></div>


    </div>
    <twfooter></twfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import twfooter from "../common/twfooter.vue";
  export default  {
    components:{
      twfooter
    },

    methods:{

    },
    mounted(){
      var a=["动态","视频"];
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
  @import "../../assets/css/Vswiperagin.css";
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    margin-bottom: 0.7rem;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #f2f2f2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    /*-webkit-box-align: center;*/
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-scrollbar{
    position: absolute;
    width: 40%;
    top: 0.4rem;
    left: 31%;
    height: 0.04rem;
    background: transparent;
    display: flex;

  }
  .swiper-pagination{
    width:100%;
    height:0.4rem;
    position: absolute;
    top:0px;
    display: flex;
    justify-content: center;
    background: #11485d;
    line-height: 0.4rem;
  }
/*动态内容*/
  #kx{
    width:100%;
    display: flex;
    justify-content: space-around;
    margin-top:0.1rem;
    padding-bottom:0.1rem;
  }
  #kx img{
    width:0.92rem;
    height:0.55rem;
  }
  #cy{
    width:100%;
  }
  #cy img{
    width:100%;
  }
  #sj{
    width:100%;
  }
  #sj img{
    width:100%;
  }
</style>
