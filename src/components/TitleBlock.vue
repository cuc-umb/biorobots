<template>
    <div class="app__title">
        <span class="scroll-indicate">01</span>
        <div class="title-text">
            <h1>Фабрика по производству биороботов</h1>
            <h3 class="secont-text">класса "монитор-кресло"</h3>
        </div>
        <div class="title-img">
          <div class="robot designer-female unlocked title-female"></div>
          <div class="robot designer-male unlocked title-male"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app__title{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-top: 120px;
}

.title-text{
    flex: 1;
}

.title-img{
    position: relative;
    flex: 0 0 300px;
    width: 300px;
    height: 300px;
    top: 40px;
    &::after{
        content: '';
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #1E2936;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        z-index: 0;
    }
}

.title-male, .title-female{
    position: absolute;
}

.title-female{
    left: -40px;
    top: -80px;
}

.title-male{
    right: 0;
    top: 60px;
    width: 135px;
    height: 198px;
    transform: scale(-1, 1);
}
</style>