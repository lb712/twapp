import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList:[],    // 后台数据

  },
  getters: {

    cartList: state => state.cartList,

  },
  mutations: {


  },
  // 异步的数据操作
  actions: {
    getSong ({commit, state}, id) {
      // 使用 CancelToken 退出一个Axios事件
      var CancelToken = Axios.CancelToken
      var source = CancelToken.source()
      if (state.loading && state.songList.length > 0) {
        console.log('cancel')
        source.cancel()
      }
      commit('openLoading')
      Axios.get(api.getSong(id)).then(res => {
        // 统一数据模型，方便后台接口的改变
        var url = res.data.data[0].url
        commit('setAudio')
        commit('setLocation', url)
      })
      .catch((error) => {     // 错误处理
        console.log(error)
        window.alert('获取歌曲信息出错！')
      })
    }
  }
})
export default store
