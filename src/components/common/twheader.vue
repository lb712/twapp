<template>
  <div>
    <div class="heade">
      <a herf="" class="head-one"><i class="iconfont icon-fangdajing"></i><span>搜索想要体验的产品</span></a>
      <div class="head-two">
        <div class="heade-h">热门</div>
        <div class="heade-h">游戏</div>
        <div class="heade-h">无人机</div>
        <div class="heade-h">相机</div>
        <div class="heade-h">镜头</div>
        <div class="heade-h">影音</div>
        <div class="heade-h">酷玩</div>


      </div>

    </div>


  </div>

</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style   scoped>

  .heade{
    width: 100%;
    height: 1.0rem;
    background: #0b3949;
    display: flex;
    flex-flow: column;
    justify-content: center;
    position: fixed;
    z-index: 50;
  }
  .head-one{
    display: inline-block;
    width: 90%;
    height: 0.35rem;
    background: #3b616e;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 0.05rem;
    display: flex;
    line-height: 0.35rem;


  }
  .head-one i{
    color: #e4e9ed;
    font-size: 0.20rem;
    margin-left: 0.14rem;
  }
  .head-one span{
    display: inline-block;
    color: #fff;
    font-size: 0.14rem;
    margin-left: 0.12rem;

  }
  .head-two{
    width:100%;
    display: flex;
    justify-content: space-between;

  }
  .heade-h{
    flex:1;
    font-size: 0.14rem;
    color: #a0b9be;
    font-weight: 100;
    text-align: center;
    /*padding-left: 0.05rem;*/
    /*padding-right: 0.05rem;*/
    margin-top: 0.1rem;

  }

</style>
