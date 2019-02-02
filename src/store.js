import Vue from 'vue'
import Vuex from 'vuex'

// index模块 
import index from './pages/index/module'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index
  }
})