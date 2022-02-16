import { SET_TOKEN } from './mutations-types';

export default {
  [SET_TOKEN] (state, token) {
    state.token = token;
  }
}