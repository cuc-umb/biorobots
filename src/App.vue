<template>
  <div id="app">
    <div class="container">
      <div class="app__header">
        <div class="logo">
          <svg width="78" height="48" viewBox="0 0 78 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C29.8512 0 35.2134 2.0939 39.378 5.57326L21 23.9513L39.431 42.3823C35.2589 45.8883 29.8761 48 24 48Z" fill="#FF7F22"/>
<circle r="4.5" transform="matrix(-1 0 0 1 43.5 23.5)" fill="#FF7F22"/>
<circle r="4.5" transform="matrix(-1 0 0 1 58.5 23.5)" fill="#FF7F22"/>
<circle r="4.5" transform="matrix(-1 0 0 1 73.5 23.5)" fill="#FF7F22"/>
</svg>
        </div>
        <defaultButton />
      </div>
      <app-title />
      <app-moneys />
      <app-market />
      <app-storage />
      <app-create-robot />
    </div>
  </div>
</template>

<script>
import AppTitle from "./components/TitleBlock.vue";
import AppMoneys from "./components/MoneysBlock.vue";
import AppMarket from "./components/MarketBlock.vue";
import AppStorage from "./components/StorageBlock.vue";
import AppCreateRobot from "./components/CreateRobotBlock.vue";

import defaultButton from "./components/buttons/defaultButton.vue";

export default {
  name: 'App',
  components:{
    AppTitle,
    AppMoneys,
    AppMarket,
    defaultButton,
    AppStorage,
    AppCreateRobot
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-SemiBold.ttf');
}

html,
body{
  height: 100%;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
}

h1{
  font-size: 56px;
  line-height: 72px;
}

h2{
  font-size: 32px;
  line-height: 48px;
}

h3{
  font-size: 24px;
  line-height: 32px;
  box-sizing: border-box;
}

fieldset{ border:none }

.secont-text{
  color: #A3B8CC;
}

.container{
  width: 80%;
  margin: 0 auto;
}

#app {
  background: radial-gradient(82.33% 70.44% at 50% 0%, #26394D 0%, #212529 100%) no-repeat;
  display: flex;
  flex-direction: column;
}

.button{
  border-radius: 60px;
  padding: 12px;
  transition: .3s ease-out;
  color: #fff;
}

.custom-input{
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox+label::before {
  content: '';
  width: 1em;
  height: 1em;
  border: 2px solid #A3B8CC;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;

}
.custom-checkbox:checked+label::before{
  border-color: #A3B8CC;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.custom-radio+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-radio+label::before {
  content: '';
  width: 1em;
  height: 1em;
  border: 2px solid #A3B8CC;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;

}
.custom-radio:checked+label::before{
  border-color: #A3B8CC;
  background-color: #FF7F22;
}

.robot{
  width: 276px;
  height: 360px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 99;
}

.designer-female{
  &.unlocked{
    background-image: url('assets/robots/robotDesignerFemaleUnlocked.png');
  }
  &.accessed{
    background-image: url('assets/robots/robotDesignerFemaleAccessed.png');
  }
  &.blocked{
    background-image: url('assets/robots/robotDesignerFemaleBlocked.png');
  }
}

.designer-male{
  &.unlocked{
    background-image: url('assets/robots/robotDesignerMaleUnlocked.png');
  }
  &.accessed{
    background-image: url('assets/robots/robotDesignerMaleAccessed.png');
  }
  &.blocked{
    background-image: url('assets/robots/robotDesignerMaleBlocked.png');
  }
}

.frontend-female{
  &.unlocked{
    background-image: url('assets/robots/robotFrontendFemaleUnlocked.png');
  }
  &.accessed{
    background-image: url('assets/robots/robotFrontendFemaleAccessed.png');
  }
  &.blocked{
    background-image: url('assets/robots/robotFrontendFemaleBlocked.png');
  }
}

.frontend-male{
  &.unlocked{
    background-image: url('assets/robots/robotFrontendMaleUnlocked.png');
  }
  &.accessed{
    background-image: url('assets/robots/robotFrontendMaleAccessed.png');
  }
  &.blocked{
    background-image: url('assets/robots/robotFrontendMaleBlocked.png');
  }
}

.app__header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
}

.scroll-indicate{
  font-size: 12px;
  line-height: 24px;
  flex: 0 1 60px;
  // position: absolute;
  // left: 0;
  // top: 0;
  color: #667380;
}

</style>
