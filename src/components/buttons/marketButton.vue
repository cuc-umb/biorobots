<template>
    <button class="button button__market">Установить</button>
</template>

<script>
export default {
  name: 'marketButton'
}
</script>

<style lang="scss" scoped>
.button__market{
  background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
  border: none;
  width: 100%;
  &:hover:enabled{
    background: #FF5722;
    cursor: pointer;
  }
  &:active:enabled{
    background: #FF7F22;
  }
  &:disabled{
    background: #4C5865;
    color: #7D90A6;
  }
}
</style>