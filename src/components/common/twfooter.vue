<template>
    <div>
        <div class="foote">
          <router-link to="/" class="foote-one">
              <i class="iconfont icon-shouye"></i>
              <span class="fs-one">首页</span>
          </router-link>
          <router-link to="Discovery" class="foote-one">
              <i class="iconfont icon-wangyuanjing"></i>
              <span class="fs-one">发现</span>
          </router-link>
          <router-link to="twmessage" class="foote-one">
              <i class="iconfont icon-icon03-copy"></i>
              <span class="fs-one">消息</span>
          </router-link>

          <router-link to="twperson" class="foote-one">

              <i class="iconfont icon-wo"></i>
              <span class="fs-one">我</span>

          </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    .foote{
        height: 0.7rem;
        width: 100%;
        background: #ffffff;
        font-size: 0.18rem;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        z-index: 50;

    }
    .foote-one{
      display: flex;
      flex-flow: column;
      align-items: center;
      align-self: center;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
    .foote-one i{
      font-size: 0.32rem;
      color: #29e3ba;
    }
    .foote-one span{
      font-size: 0.14rem;
      color: #9a9a9a;
    }
    .foote-one:nth-of-type(1) span{
      color:#1ee9ba ;
    }
    .foote-one .fs-one{
      display: inline-block;
      color: #9a9a9a!important;

    }
</style>
