<template>
  <header :class="$style.header">
    <div :class="$style.content">
      <img src="@/assets/logo.svg"/>
      <div>
        <button @click="showModal">Nova transação</button>
        <button>Sair</button>
      </div>  
    </div>  
  </header>
</template>

<script>
export default {
  name:"Header",
  emits: ["showModalEvent"],
  methods: {
    showModal () {
      this.$emit('showModalEvent')
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>