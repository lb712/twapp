<template>
    <div>
      <swiperone></swiperone>
      <swipertwo></swipertwo>
      <swipertwo></swipertwo>

      <div class="tuijian"><h3>推荐租赁</h3></div>
      <bgboxthree :list="cartList"></bgboxthree>






    </div>
</template>

<script type="text/ecmascript-6">
  import swiperone from "../tw-other/swiperone.vue";
  import swipertwo from "../tw-other/swipertwo.vue";
  import bgboxthree from "../tw-other/bgboxthree.vue";
  import ShopCartService from "../../fetch/ShopCartService";

  export default {
    data(){
      return {
        cartList:[]
      }
    },
      components:{
        swiperone,
        swipertwo,
        bgboxthree

      },
    methods:{

          initData:function () {
            ShopCartService.getShopCartListByUser((data) => {
              this.cartList = data;
              console.log(data)

            })
          }
      },
        created:function () {
          this.initData();

        },
    monuted(){
      console.log(1)
    }
  }
</script>

<style scoped>

    .tuijian h3{
      font-size: 0.16rem;
      margin-top: 0.25rem;
      margin-left: 0.12rem;
      margin-bottom: 0.15rem;
    }
</style>
