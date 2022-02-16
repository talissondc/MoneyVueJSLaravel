<template>
  <div :class="$style.signUpContainer">
    <img src="@/assets/logo.svg"/>
    <div :class="$style.signUpContent">
      <form>
        <Input type='text' placeholder='Nome' v-model="form.name"/>
        <Input type='text' placeholder='Email' v-model="form.email"/>
        <Input type='password' placeholder='Senha' v-model='form.password' />
        <SubmitButton @click="register">Cadastrar</SubmitButton>
      </form> 
      <router-link to="/">voltar</router-link> 
    </div>  
  </div>
</template>

<script>
import Input from '@/components/input';
import SubmitButton from '@/components/submitButton';
import api from '@/services/api.js';

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
    }
  }),
  methods: {
    async register() {
     if(this.form.name && this.form.email && this.form.password) {
       try {
         await api.post('/auth/register', this.form);

         this.$router.push('/login')
       } catch (error) {
        console.log(error);
       }
     }

    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>