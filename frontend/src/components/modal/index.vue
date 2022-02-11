<template>
  <div :class="$style.modalMask" @click="closeModal">
    <div @click.stop :class="$style.modalContainer">
      <slot />
    </div>  
  </div>  
</template>

<script>

export default {
  name:"Modal",
  emits: ["closeModalEvent"],
  methods: {
    closeModal () {
      this.$emit('closeModalEvent');
    }
  }
} 
</script>

<style module lang="scss">
  @import './styles.scss';
</style>