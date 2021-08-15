<template>
    <div class="app__market">
        <span class="scroll-indicate">03</span>
        <h2>Рынок комплектующих</h2>
        <div class="market-items">
            <div class="market-item" v-for="item in market" :key="item.id">
                <div class="item__img"><img :src="item.img" :alt="item.img"></div>
                <div class="item__title">{{item.title}}</div>
                <div class="item__cost">Стоимость: {{item.cost}} монет</div>
                <marketButton @click.native="installPart(item)" :disabled="item.disabled"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import marketButton from "./buttons/marketButton.vue";

export default {
    components:{
        marketButton,
    },
    computed: {
        ...mapGetters({
            getMarketBio: 'getMarketBio',
            getMarketProc: 'getMarketProc',
            getMarketSoul: 'getMarketSoul'
        }),
        ...mapState({
            market: state => state.market,
            wallet: state => state.wallet,
        })
    },
    watch:{
        'wallet': function(el) {
            this.market.forEach(element => {
                this.$store.commit('disablingButtons', {
                        arrType: this.market,
                        disable: el>=element.cost ? false : true, 
                        getTitle: element.title
                    }
                )
            })
        }
    },
    methods:{
        installPart(item){
            if (item.title==='Биомеханизм') {
                return this.$store.commit('installPart', this.getMarketBio)
            } else if (item.title==='Процессор') {
                return this.$store.commit('installPart', this.getMarketProc)
            } else if (item.title==='Душа'){
                return this.$store.commit('installPart', this.getMarketSoul)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.app__market{
    margin-top: 100px;
}

.market-items{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 60px;

    .market-item{
        margin: 0 10px;
        
        *{
            margin: 10px 0;
        }

        .item__img {
            width: 236px;
            height: 128px;
            margin-bottom: 20px;
            img{
                width: 70%;
                height: 70%;
                object-fit: contain;
                filter: drop-shadow(0px 8px 90px #FF7F22);
            }
        }
    }
}

</style>