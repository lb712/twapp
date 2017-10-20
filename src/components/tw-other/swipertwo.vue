<template>
  <div>
    <div class="stwo">
      <h3>热门体验</h3>
      <a href="">查看全部</a>
    </div>
    <div class="swiper-container aa">
      <div class="swiper-wrapper swiper-one">

        <div class="swiper-slide">
          <div class="smll-box">
              <img src="../../assets/img/6.jpg"/>
              <p>索尼DSC-RX100 M5 黑卡5数码相机</p>
              <span>￥65.00/天</span>
          </div>

        </div>
        <div class="swiper-slide">
          <div class="smll-box">
            <img src="../../assets/img/7.jpg"/>
            <p>Apple Watch Seirs 2 智能手表</p>
            <span>￥29.00/天</span>
          </div>

        </div>
        <div class="swiper-slide">
          <div class="smll-box">
            <img src="../../assets/img/6.jpg"/>
            <p>索尼DSC-RX100 M5 黑卡5数码相机</p>
            <span>￥65.00/天</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="smll-box">
            <img src="../../assets/img/7.jpg"/>
            <p>索尼DSC-RX100 M5 黑卡5数码相机</p>
            <span>￥65.00/天</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="smll-box">
            <img src="../../assets/img/7.jpg"/>
            <p>索尼DSC-RX100 M5 黑卡5数码相机</p>
            <span>￥65.00/天</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="smll-box">
            <img src="../../assets/img/6.jpg"/>
            <p>索尼DSC-RX100 M5 黑卡5数码相机</p>
            <span>￥65.00/天</span>
          </div>
        </div>

      </div>






    </div>

  </div>
</template>

<script type="text/ecmascript-6">
//   import "../../assets/js/swiper.min.js"
  export default {


    mounted(){

      var swiper1 = new Swiper('.aa', {
       // pagination: '.swiper-pagination',
          slidesPerView: 2,
          paginationClickable: true,
          spaceBetween: 4
      });

    }

  }

</script>
<style scoped>
  /*@import "../../assets/css/swiper.min.css";*/
  .swiper-slide img{
    width: 100%;
  }

  .stwo{
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .stwo h3{
    font-size: 0.16rem;
    margin-left: 0.2rem;

  }
  .stwo a{
    font-size: 0.14rem;
    color: #18bd9b;
    margin-right: 0.2rem;
  }
  .smll-box{
    display: flex;
    flex-flow: column;

  }

  .smll-box p{
    font-size: 0.18rem;
    color: #2f2f2f;
    margin-left: 0.08rem;
    text-align: center;
    font-weight: 500;


  }
  .smll-box img{
    height: 100%;

  }
  .smll-box span{
    color: #d34440;
    font-size: 0.14rem;
    text-align: center;
    margin-top: 0.13rem;
    font-weight: 600;
  }
</style>

