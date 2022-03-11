import { SET_TRANSACTIONS, SET_NEW_TRANSACTION, DELETE_TRANSACTION } from './mutations-types';
import { transactionApi } from '@/services/api';

export default {
  actionGetAllTransactions: async ({commit}) => {
    try {
      const response = await transactionApi().get('/');

      commit(SET_TRANSACTIONS, response.data);
    } catch(error) {
      console.log(error)
    }
  },
  actionSetNewTransaction: async ({commit}, form) => {
    try {
      const response = await transactionApi().post('/', form);

      commit(SET_NEW_TRANSACTION, response.data);
    } catch(error) {
      console.log(error)
    }
  },
  actionDeleteTransaction: async ({commit}, id) => {
    try {
      await transactionApi().delete(`/${id}`);

      commit(DELETE_TRANSACTION, id);

    } catch(error) {
      console.log(error)
    }
  }
}