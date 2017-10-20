import Vue from 'vue'
import Router from 'vue-router'

import bigone from "../components/section/bigone.vue";
import twdetails from "../components/tw-other/twdetails.vue";
import Qrdd from "../components/tw-other/Qrdd.vue";
import Zfdd from "../components/tw-other/Zfdd.vue";
import twfooter from "../components/common/twfooter.vue";
import twperson from "../components/tw-other/twperson.vue";
import zuhe from "../components/section/zuhe.vue";
import twmessage from "../components/tw-other/twmessage.vue"
import Discovery from "../components/tw-other/Discovery.vue"
import twmestalk from "../components/tw-other/twmestalk.vue"
import ZhuCe from "../components/tw-other/ZhuCe.vue"
import vuehe from "../components/tw-other/vuehe.vue"
Vue.use(Router);


export default new Router({
  routes: [
    {path:'/',
      name:'bigone',
      component:bigone
    },

    {
      path:'/twdetails',
      name:'twdetails',
      component:twdetails,

    },
    {
      path:'/qrdd',
      name:'Qrdd',
      component:Qrdd
    },
    {
      path:'/zfdd',
      name:'Zfdd',
      component:Zfdd
    },
    {
      path:'/twfooter',
      name:'twfooter',
      component:twfooter
    },
    {
      path:'/twperson',
      name:'twperson',
      component:twperson
    },
    {
      path:'/zuhe',
      name:'zuhe',
      component:zuhe
    },
    {
      path:'/twmessage',
      name:'twmessage',
      component:twmessage
    },
    {
      path:'/Discovery',
      name:'Discovery',
      component:Discovery
    },
    {
      path:'/twmestalk',
      name:'twmestalk',
      component:twmestalk
    },
    {
      path:'/ZhuCe',
      name:'ZhuCe',
      component:ZhuCe
    },
    {
      path:'/vuehe',
      name:'vuehe',
      component:vuehe
    }
  ]
})









