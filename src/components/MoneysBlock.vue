<template>
    <div class="app__money">
        <span class="scroll-indicate">02</span>
        <h2>Кошелек криптовалют</h2>
        <div class="moneys-img">
            <div class="money"></div>
        </div>
        <div class="money-count"><span>{{wallet}}</span> biorobo монет</div>
        <div class="moneys-minig">
            <button class="button__mining" @click="increaseWallet()">Нацыганить</button>
            <input type="checkbox" name="increase" v-model="walletx5" class="custom-input custom-checkbox" id="increase-mining" checked><label for="increase-mining">Цыганить по 5 монет</label>
        </div>    
    </div>    
</template>

<script>
export default {
    data(){
        return{
            walletx5: false
        }
    },
    computed:{
        wallet(){
            return this.$store.state.wallet
        }
    },
    methods:{
        increaseWallet(){
            return this.walletx5 ? this.$store.commit('increaseWallet', 5) : this.$store.commit('increaseWallet', 1)
        }
    }
}
</script>

<style lang="scss" scoped>
.app__money{
    margin-top: 100px;
}

.button__mining{
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #FF7F22;
    color: #FF7F22;
    margin-right: 23px;
}
.moneys-img{
    margin-top: 60px;
    margin-bottom: 24px;
    .money{
        background: center / contain no-repeat url('../assets/coin.png');
        width: 16px;
        height: 20px;
    }
}

.money-count{
    color: #A3B8CC;
    span{
        font-weight: 700;
        font-size: 24;
    }
}
</style>