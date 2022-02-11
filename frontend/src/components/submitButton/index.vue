<template>
  <button @click='emitEvent' type="button" :class="$style.submitButton">
    <slot/>
  </button>
</template>

<script>
export default {
  methods:{
    emitEvent() {
      this.$emit('submitButtonEvent')
    }
  }
}
</script>

<style module lang="scss">
  @import './styles.scss';
</style>
