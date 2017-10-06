import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  jokes: []
}

//pass in our state into the new vuex instance
export default new Vuex.Store({
  state
})
