
import Vue from "vue";
import app from "./app.vue";
import VueRouter from 'vue-router'
import "./assets/font/iconfont.css";
import "./assets/js/jquery-1.8.3.min.js";
import "./assets/js/swiper.min.js";
import "./assets/css/swiper.min.css";
import router from "./router/index";

Vue.use(VueRouter);

new Vue({
        el:"#app",
          router,
        render:(createElement)=>{
            return createElement(app);
        }
})
