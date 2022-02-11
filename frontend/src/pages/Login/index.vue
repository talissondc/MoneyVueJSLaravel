<template>
  <div :class="$style.loginContainer">
    <img src="@/assets/logo.svg"/>
    <div :class="$style.loginContent">
      <form>
        <Input type='text' placeholder='Email' :model='form.email'/>
        <Input type='password' placeholder='Senha' :model='form.password' />
        <SubmitButton>Entrar</SubmitButton>
      </form> 
      <router-link to="/signUp">Cadastrar</router-link> 
    </div>  
  </div>
</template>

<script>
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
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>