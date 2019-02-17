import {RECEIVE_USER} from '../mutation-types'

const state = {
  username:''
};

const actions = {
  saveUser({commit},username){
    commit(RECEIVE_USER,{username})
  }
};

const mutations = {
  [RECEIVE_USER](state,{username}){
    state.username = username
  }
};

export default{
  state,
  actions,
  mutations
}
