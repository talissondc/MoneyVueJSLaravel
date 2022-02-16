import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  token: '',
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}