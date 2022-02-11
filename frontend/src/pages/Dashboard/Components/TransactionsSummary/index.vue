<template>
  <section :class="$style.transactionsSummary">
    <div :class="$style.summary">
      <header>
        <p>Entradas</p>
        <img src="@/assets/income.svg" />
      </header>
      <strong>R$ 6.000,00</strong>
    </div>
    <div :class="$style.summary">
      <header>
        <p>Saídas</p>
        <img src="@/assets/outcome.svg" />
      </header>
      <strong>R$ 600,00</strong>
    </div>
    <div :class="$style.summaryTotal">
      <header>
        <p>Total</p>
        <img src="@/assets/total.svg" />
      </header>
      <strong>R$ 5.400,00</strong>
    </div>  
  </section> 
</template>

<style module lang="scss">
  @import './styles.scss';
</style>