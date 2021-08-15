<template>
    <button class="button button__default" :disabled="buttonDisable">Произвести робота</button>
</template>

<script>
export default {
  props: ['buttonDisable'],
  name: 'defaultButton'
}
</script>

<style lang="scss" scoped>
.button__default{
  background-color: transparent;
  border: 2px solid #FF7F22;
  &:hover:enabled{
    background-color: #FF5722;
    border-color: #FF5722;
    cursor: pointer;
  }
  &:active:enabled{
    background-color: #FF7F22;
    border-color: #FF7F22;
  }
  &:disabled{
    border: 2px solid #4C5865;
    color: #4C5865;
  }
}
</style>