import { SET_TOKEN } from './mutations-types';
import { authApi, authApiWithToken } from '@/services/api';

export default {
  actionLogin: async ({ dispatch }, form) => {
    try {
      const response = await authApi().post('/login', form);

      dispatch('actionSetToken', response.data.access_token);
    
      return response.status;
    } catch(error) {
      return error.response.status;
    }
  },

  actionSetToken: ({ commit }, token) => {
    if(token) {
      localStorage.setItem('money_api_token', token);
    }
    commit(SET_TOKEN, token);
  },

  actionCheckSession: async ({dispatch}) => {
    try {
      const response = await authApiWithToken().post('/check-token');
      
      return response
    } catch(error) {
      dispatch('actionLogout');
    }
  },

  actionLogout: ({dispatch}) => {
    localStorage.removeItem('money_api_token');
    dispatch('actionSetToken', '');
  }
}
