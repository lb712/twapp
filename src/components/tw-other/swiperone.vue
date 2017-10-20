<template>
    <div class="swiper-one">

      <div class="swiper-container bb">
        <div class="swiper-wrapper wrapper-one">
          <div class="swiper-slide"><img src="../../assets/img/3.jpg"/></div>
          <div class="swiper-slide"><img src="../../assets/img/4.jpg"/></div>
          <div class="swiper-slide"><img src="../../assets/img/5.jpg"/></div>
        </div>






      </div>

    </div>
</template>

<script type="text/ecmascript-6">
//  import "../../assets/js/swiper.min.js"
    export default {


        mounted(){

          var mySwiper = new Swiper (' .bb', {
//            direction: 'vertical',
              loop: true,
              autoplay:1000,//是否自动播放
              // 如果需要分页器

            autoplayDisableOnInteraction : false,



          })

        }

    }

</script>
<style scoped>
 /*@import "../../assets/css/swiper.min.css";*/
.bb{
    width: 100%;
    height: 100%;
    margin-top: 0.2rem;

}
.swiper-slide  img{
    width: 100%;
    height: 100%;

}


</style>
