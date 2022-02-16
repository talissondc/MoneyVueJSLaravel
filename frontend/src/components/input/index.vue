<template>
  <input :class="$style.input" :type="type" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  props: {
    placeholder: String,
    type: String,
  }, 
}
</script>

<style module lang='scss'>
  @import './styles.scss';
</style>