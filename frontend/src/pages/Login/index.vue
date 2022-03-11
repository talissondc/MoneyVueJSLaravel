<template>
  <div :class="$style.loginContainer">
    <img src="@/assets/logo.svg"/>
    <div :class="$style.loginContent">
      <form>
        <Input type='text' placeholder='Email' v-model='form.email' :errorObject="inputErrorEmail" />
        <Input type='password' placeholder='Senha' v-model='form.password' :errorObject="inputErrorPassword" />
        <SubmitButton @click="login">Entrar</SubmitButton>
      </form> 
      <router-link to="/signup">Cadastrar</router-link> 
    </div>  
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Input from '@/components/input';
import SubmitButton from '@/components/submitButton';

export default {
  name:"Login",
  components: {
    Input,
    SubmitButton,
  },
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    inputErrorEmail: {
      error: false,
      message: ''
    } ,
    inputErrorPassword: {
      error: false,
      message: ''
    }
  }),
  methods: {
    ...mapActions('login', ['actionLogin']),

    async login() {
      if(this.form.email && this.form.password) {
          
         const response = await this.actionLogin(this.form);
        
         if(response != 200) { 
            this.inputErrorPassword.message = "Cheque suas credenciais!";
            this.inputErrorPassword.error = true;
            this.inputErrorEmail.message = "Cheque suas credenciais!";
            this.inputErrorEmail.error = true;
         }
        
        this.$router.push('/home');
      } 

      if(!this.form.email) {
        this.inputErrorEmail.message = "Email não pode ser vazio!";
        this.inputErrorEmail.error = true;
      } else {
        this.inputErrorEmail.message = "";
        this.inputErrorEmail.error = false;
      }

      if(!this.form.password) {
        this.inputErrorPassword.message = "Senha não pode ser vazia!";
        this.inputErrorPassword.error = true;
      } else {
        this.inputErrorPassword.message = "";
        this.inputErrorPassword.error = false;
      }

    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>
