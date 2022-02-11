<template>
  <div :class="$style.signUpContainer">
    <img src="@/assets/logo.svg"/>
    <div :class="$style.signUpContent">
      <form>
        <Input type='text' placeholder='Name' :model='form.name'/>
        <Input type='text' placeholder='Email' :model='form.email'/>
        <Input type='password' placeholder='Senha' :model='form.password' />
        <SubmitButton>Cadastrar</SubmitButton>
      </form> 
      <router-link to="/">voltar</router-link> 
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
      name: '',
      email: '',
      password: ''
    }
  }),
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>