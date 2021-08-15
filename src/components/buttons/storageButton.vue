<template>
    <button class="button button__storage">Продать</button>
</template>

<script>
export default{
  name: 'storageButton'
}
</script>

<style lang="scss" scoped>
.button__storage{
  // background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
  background: transparent;
  border: 2px solid;
  // border-image-source: linear-gradient(90deg, #22B3E3 0%, #7CDAF9 52.6%, #22B3E3 100%);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  color: #7CDAF9;
  width: 100%;
  &:hover:enabled{
    background: #7CDAF9;
    border-color: #7CDAF9;
    color: #212529;
    filter: drop-shadow(0px 10px 40px #1E5466);
    cursor: pointer;
  }
  &:active:enabled{
    border: 2px solid #22B3E3;
    color: #22B3E3;
    background: transparent;
  }
  &:disabled{
    border: 2px solid #4C5865;
    color: #4C5865;
  }
}
</style>