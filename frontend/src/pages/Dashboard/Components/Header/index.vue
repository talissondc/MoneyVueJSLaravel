<template>
  <header :class="$style.header">
    <div :class="$style.content">
      <img src="@/assets/logo.svg"/>
      <div>
        <button @click="showModal">Nova transação</button>
        <button @click="logout">Sair</button>
      </div>  
    </div>  
  </header>
</template>

<script>
import { authApiWithToken } from '@/services/api';

export default {
  name:"Header",
  emits: ["showModalEvent"],
  methods: {
    showModal () {
      this.$emit('showModalEvent')
    },
    async logout() {
      try {
        await authApiWithToken().post('/logout');

        localStorage.removeItem('money_api_token');

        this.$router.push('/login');
      } catch (error) {
        localStorage.removeItem('money_api_token');
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>