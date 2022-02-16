<template>
  <button type="button" :class="$style.submitButton">
    <slot/>
  </button>
</template>

<style module lang="scss">
  @import './styles.scss';
</style>
