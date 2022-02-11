<template>
  <button :class="$style.modalClose" @click="closeModal">
    <img src="@/assets/close.svg"/>
  </button>
  <form :class="$style.form">
    <h2>Cadastrar transação</h2>
    <input type="text" placeholder="Titulo" :model='form.title'>
    <input type="number" placeholder="0" :modal='form.value'>
    <div :class="$style.selectButtonsContainer">
      <button 
      :class="activeClassGreen ? $style.green : ''"
      @click="selectDeposit"
      type="button"
      >
        <img src="@/assets/income.svg"/>
        <span>Entrada</span>
      </button>
      <button 
      :class="activeClassRed ? $style.red : ''"
      @click="selectWithdraw"
       type="button"
      >
        <img src="@/assets/outcome.svg"/>
        <span>Saída</span>
      </button>
    </div>
    <input type="text" placeholder="Categoria" :model='form.category'>
    <button :class="$style.submitButton">Cadastrar</button>  
  </form>    
</template>

<script>
export default {
  name:"NewTransaction",
  emits: ["closeModalEvent"],
  data: () => ({
    form: {
      title: '',
      value: 0,
      type: '',
      category:''
    },
    activeClassGreen: false,
    activeClassRed: false,
  }),
  methods: {
    closeModal() {
      this.$emit("closeModalEvent");
    },
    selectDeposit() {
      this.activeClassGreen = true;
      this.activeClassRed = false;
      this.form.type = 'deposit'
    },
    selectWithdraw() {
      this.activeClassGreen = false;
      this.activeClassRed = true;
      this.form.type = 'withdraw'
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>