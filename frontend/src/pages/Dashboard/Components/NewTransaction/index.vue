<template>
  <button :class="$style.modalClose" @click="closeModal">
    <img src="@/assets/close.svg"/>
  </button>
  <form :class="$style.form">
    <h2>Cadastrar transação</h2>
    <Input type="text" placeholder="Titulo" v-model='form.title' :errorObject="inputErrorTitle"/>
    <Input type="number" placeholder="0" v-model='form.value' :errorObject="inputErrorValue"/>
    <div :class="$style.selectButtonsContainer">
      <button 
      :class="[activeClassGreen ? $style.green : '', typeError ? $style.error : '']"
      @click="selectDeposit"
      type="button"
      >
        <img src="@/assets/income.svg"/>
        <span>Entrada</span>
      </button>
      <button 
      :class="[activeClassRed ? $style.red : '', typeError ? $style.error : '']"
      @click="selectWithdraw"
       type="button"
      >
        <img src="@/assets/outcome.svg"/>
        <span>Saída</span>
      </button>
    </div>
    <Input type="text" placeholder="Categoria" v-model='form.category' :errorObject="inputErrorCategory"/>
    <SubmitButton @click="createTransaction" :class="$style.submitButton">Cadastrar</SubmitButton>  
  </form>    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Input from '@/components/input';
import SubmitButton from '@/components/submitButton';

export default {
  name:"NewTransaction",
  components: {
    Input,
    SubmitButton
  },
  emits: ["closeModalEvent", "updateTransactions"],
  data: () => ({
    form: {
      title: '',
      value: 0,
      type: '',
      category:''
    },
    activeClassGreen: false,
    activeClassRed: false,
    inputErrorTitle: {
      error: false,
      message: ''
    },
    inputErrorCategory: {
      error: false,
      message: ''
    },
    inputErrorValue: {
      error: false,
      message: ''
    },
    typeError: false
  }),
   computed: {
     ...mapGetters('dashboard', ['getTransactions']),
  },
  methods: {
    ...mapActions('dashboard', ['actionSetNewTransaction']),

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
    },

   async  createTransaction() {
      if(this.form.title  && this.form.value && this.form.type) {
        await this.actionSetNewTransaction(this.form);

        this.$emit('updateTransactions');
        this.$emit('closeModalEvent');
      }

       if(!this.form.title) {
        this.inputErrorTitle.message = "Titulo não pode ser vazio!";
        this.inputErrorTitle.error = true;
      } else {
        this.inputErrorTitle.message = "";
        this.inputErrorTitle.error = false;
      }

      if(!this.form.category) {
        this.inputErrorCategory.message = "Categoria não pode ser vazia!";
        this.inputErrorCategory.error = true;
      } else {
        this.inputErrorCategory.message = "";
        this.inputErrorCategory.error = false;
      }

       if(!this.form.value) {
        this.inputErrorValue.message = "Valor não pode ser vazio!";
        this.inputErrorValue.error = true;
      } else {
        this.inputErrorValue.message = "";
        this.inputErrorValue.error = false;
      }

      if(!this.form.type) {
        this.typeError = true;
      } else {
        this.typeError = false;
      }
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>