<template>
    <div>
      <div class="swiper-container big">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><sectionone></sectionone></div>
          <div class="swiper-slide"><bgboxthree :list="cartList"></bgboxthree></div>
          <div class="swiper-slide"><bgboxthree :list="cartList"></bgboxthree></div>
          <div class="swiper-slide"><bgboxthree :list="cartList"></bgboxthree></div>
          <div class="swiper-slide"><bgboxthree :list="cartList"></bgboxthree></div>
          <div class="swiper-slide"><bgboxthree :list="cartList"></bgboxthree></div>
          <div class="swiper-slide"><bgboxthree :list="cartList"></bgboxthree></div>

        </div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import sectionone from "../section/sectionone.vue";
  import bgboxthree from "./bgboxthree.vue";
  import twdetails from "../tw-other/twdetails.vue";
  import ShopCartService from "../../fetch/ShopCartService";

    export default {
      data(){
        return {
          cartList:[]
        }
      },
      components:{
        sectionone,
        twdetails,
        bgboxthree


      },
      methods:{

        initData:function () {
            ShopCartService.getShopCartListByUser((data)=>{
              this.cartList = data;


            })
        }

      },

      mounted(){

          var mySwiper = new Swiper ('.big', {
            autoHeight:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',


          })
        },
          created:function () {
            this.initData()
          }

    }
</script>

<style scoped>
  @import "../../assets/css/Vswiperagin.css";
  .big{
    width: 100%;
    overflow: scroll;
    margin-bottom: 0.7rem;






  }
  .swiper-scrollbar{
    position: absolute;
    left: 0;
    top:1.0rem;
  }
  .swiper-slide{
    margin-top: 0.8rem;

  }




</style>



