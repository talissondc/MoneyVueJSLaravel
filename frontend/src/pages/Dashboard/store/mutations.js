import { DELETE_TRANSACTION, SET_NEW_TRANSACTION, SET_TRANSACTIONS } from './mutations-types';

export default {
  [SET_TRANSACTIONS] (state, transactions) {
    state.transactions = transactions;
  },
  [SET_NEW_TRANSACTION] (state, newTrancation) {
    state.transactions = [...state.transactions, newTrancation];
  },
  [DELETE_TRANSACTION] (state, idTransaction) {
   state.transactions = state.transactions.filter((transaction) => transaction.id !== idTransaction);
  }
}