<template>
  <div :class="[$style.inputContainer, errorObject.error ? $style.activeError : '']">
    <input :class="$style.input" :type="type" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" maxlength="60">
    <div :class="$style.tip" v-if="errorObject.error">
      <span>{{errorObject.message}}</span>
      <AlertCircleIcon size="20" class="custom-class"/>
    </div>  
  </div>
</template>

<script>
import { AlertCircleIcon } from '@zhuowenli/vue-feather-icons';
export default {
  props: {
    placeholder: String,
    type: String,
    errorObject: {
      error: Boolean,
      message: String,
    },
  },
  components: {
    AlertCircleIcon
  } 
}
</script>

<style module lang='scss'>
  @import './styles.scss';
</style>