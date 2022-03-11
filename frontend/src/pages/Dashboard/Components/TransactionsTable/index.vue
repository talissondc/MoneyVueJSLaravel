<template>
  <div :class="$style.container">
    <table v-if="transactions.length > 0">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
          <th>Deletar</th>
        </tr>  
      </thead>
      <tbody >
        <tr v-for="eachTransaction in transactions" :key="eachTransaction.id">
          <td>{{eachTransaction.title}}</td>
          <td :class="eachTransaction.type == 'deposit' ? $style.deposit : $style.withdraw">
            {{new Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL',
               }).format(eachTransaction.value)
              }}
          </td>
          <td>{{eachTransaction.category}}</td>
          <td>{{new Intl.DateTimeFormat('pt-BR').format(new Date(eachTransaction.created_at))}}</td>
          <td>
            <button @click="deleteTransaction(eachTransaction.id)">
              <img src="@/assets/close.svg"/>
             </button>
          </td>  
        </tr>
      </tbody>    
    </table>  
  </div>  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:"TransactionsTable",
   emits: ["updateTransactions"],
  props: {
    transactions: Array,
  },
  methods: {
    ...mapActions('dashboard', ['actionDeleteTransaction']),

    async deleteTransaction(transactionID) {
      await this.actionDeleteTransaction(transactionID);

      this.$emit('updateTransactions');
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>