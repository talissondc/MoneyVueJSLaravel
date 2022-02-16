<template>
  <div :class="$style.loginContainer">
    <img src="@/assets/logo.svg"/>
    <div :class="$style.loginContent">
      <form>
        <Input type='text' placeholder='Email' v-model='form.email'/>
        <Input type='password' placeholder='Senha' v-model='form.password' />
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
    SubmitButton
  },
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('login', ['actionLogin']),

    async login() {
      if(this.form.email && this.form.password) {
          
         const response = await this.actionLogin(this.form);
        
         if(response != 200) {
           return alert("Cheque suas credenciais!");
         }
        
        this.$router.push('/home');
      }  
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>