<template>
  <section :class="$style.transactionsSummary">
    <div :class="$style.summary">
      <header>
        <p>Entradas</p>
        <img src="@/assets/income.svg" />
      </header>
      <strong>
        {{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(income)
        }}
    </strong>
    </div>
    <div :class="$style.summary">
      <header>
        <p>Saídas</p>
        <img src="@/assets/outcome.svg" />
      </header>
      <strong>
         {{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(outcome)
        }}
      </strong>
    </div>
    <div :class="[$style.summaryTotal, total >= 0 ? $style.green : $style.red]">
      <header>
        <p>Total</p>
        <img src="@/assets/total.svg" />
      </header>
      <strong>
         {{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)
        }}
      </strong>
    </div>  
  </section> 
</template>

<script>
export default {
  props: {
    transactions: Array
  },
  data: () => ({
    total: 0,
    income: 0,
    outcome: 0,
  }),
  watch:{
    transactions: function () {
      this.total = 0;
      this.income = 0;
      this.outcome = 0;

       this.transactions.forEach(transaction =>{
      if(transaction.type == 'deposit') {
        this.income += transaction.value;
      } else if(transaction.type == 'withdraw') {
        this.outcome += transaction.value;
      }
    })
    this.total = this.income - this.outcome;
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>