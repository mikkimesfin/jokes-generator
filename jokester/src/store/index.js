import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  jokes: []
}

//pass in our state into the new vuex instance
export default new Vuex.Store({
  state,
  mutations,
  actions
})
