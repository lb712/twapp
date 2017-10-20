<template>
    <div>
      <router-link :to="{ name: 'twdetails', params: { id: item.id }}"  >

          <div id="tuijian" >
            <img :src="item.friendnum"/>
            <div class="tu-one">
              <div class="tu-one-o">
                <span>{{item.headimage}}</span>
                <span class="one-span">{{item.experience}}<span class="two-span">/天</span></span>
              </div>
              <span class="tu-two-t"><img src="../../assets/img/2.jpg" /><span class="three-span">{{item.lastactivity}}分</span></span>
               <div class="tu-three">
                  <span >外观4.9</span>
                  <span>价格5.0</span>
                  <span>实用性4.8</span>
              </div>
            </div>

          </div>
      </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
       props:["item"],
        data(){
         return{
           id:[]
         }
        }
    }
</script>

<style scoped>
    #tuijian{
      width: 100%;
      display: flex;
      flex-flow: column;
      margin-top: 0.12rem;
      border-bottom: 1px solid #cccccc;
      border-top: 1px solid #cccccc;


    }
    #tuijian img{
      width: 100%;


    }
    .tu-one{
      display: flex;
      flex-flow: column;
      margin-top: 0.10rem;
      margin-left: 0.10rem;
    }
    .tu-one-o{
      display: flex;

    }
    .tu-one-o span:nth-of-type(1){
      font-size: 0.16rem;
      color: #062c39;
      font-weight: 600;
      width: 70%;
    }
    .tu-one-o  .one-span{
      color: #002b38;
      font-size: 0.16rem;
      font-weight: 600;
      margin-left: 0.15rem;
     margin-bottom: 0.12rem;
      flex: 1;
    }
    .tu-one-o .one-span .two-span{
      color: #7a7a7a;
      font-size: 0.14rem;
    }
    .tu-two-t{
      display: flex;
      font-size: 0.18rem;
      margin-top: 0.12rem;

    }
    #tuijian .tu-two-t img{
      width: 30%;
      height: 30%;
    }
    .tu-two-t span{
      font-size: 0.16rem;
      color: #000;
      font-weight: 600;
      margin-left: 0.08rem;

    }

  .tu-one  .tu-three{
      display: flex;
      justify-content: flex-start;
      margin-top: 0.08rem;

  }
  .tu-three span{
     font-size: 0.14rem;
      color: #7f7f7f;
      font-weight: 500;
      margin-right: 0.09rem;
      margin-bottom: 0.06rem;

  }




</style>
