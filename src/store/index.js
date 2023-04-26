import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import datadeal from './module/datadeal'
import alarmTrans from './module/alarmTrans'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    datadeal,
    alarmTrans
  }
})
