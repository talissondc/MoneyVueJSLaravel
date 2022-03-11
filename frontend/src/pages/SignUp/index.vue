<template>
  <div :class="$style.signUpContainer">
    <img src="@/assets/logo.svg"/>
    <div :class="$style.signUpContent">
      <form>
        <Input type='text' placeholder='Nome' v-model="form.name" :errorObject="inputErrorName"/>
        <Input type='text' placeholder='Email' v-model="form.email" :errorObject="inputErrorEmail"/>
        <Input type='password' placeholder='Senha' v-model='form.password' :errorObject="inputErrorPassword"/>
        <SubmitButton @click="register">Cadastrar</SubmitButton>
      </form> 
      <router-link to="/">voltar</router-link> 
    </div>  
  </div>
</template>

<script>
import Input from '@/components/input';
import SubmitButton from '@/components/submitButton';
import { authApi } from '@/services/api.js';

export default {
  name:"Login",
  components: {
    Input,
    SubmitButton
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      password: ''
    },
    inputErrorName: {
      error: false,
      message: ''
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
    async register() {
     if(this.form.name && this.form.email && this.form.password) {
       try {
         await authApi().post('/register', this.form);
          
         this.$router.push('/login')
       } catch (error) {
         this.inputErrorEmail.message = "Email inválido ou ja em uso!";
         this.inputErrorEmail.error = true
         console.log (this.inputErrorEmail);
       }
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

     if(!this.form.name) {
      this.inputErrorName.message = "Nome não pode ser vazio!"
      this.inputErrorName.error = true;
    } else {
      this.inputErrorName.message = ""
      this.inputErrorName.error = false;
    }
   }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>