<template>
    <div class="app__storage">
        <span class="scroll-indicate">04</span>
        <h2>Склад</h2>
        <div class="storage-items">
            <div class="storage-item" v-for="item in storage" :key="item.id">
                <div class="item__title">{{item.title}}</div>
                <div class="item__cost">Стоимость: {{item.cost}} монет</div>
                <div class="item__amount">{{item.amount}} шт</div>
                <storageButton @click.native="sellPart(item)" :disabled="item.disabled"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import storageButton from "./buttons/storageButton.vue";

export default {
    components: {
        storageButton
    },
    computed: {
        ...mapGetters({
            getStorageBio: 'getStorageBio',
            getStorageProc: 'getStorageProc',
            getStorageSoul: 'getStorageSoul'
        }),
        ...mapState({
            storage: state => state.storage,
            wallet: state => state.wallet,
            selled: state => state.selled
        })
    },
    created(){
        this.storage.forEach(element => {
            this.$store.commit('disablingButtons', {
                arrType: this.storage,
                disable: element.amount===0 ? true : false, 
                getTitle: element.title
            })
        });
    },
    updated(){
        this.storage.forEach(element => {
            this.$store.commit('disablingButtons', {
                arrType: this.storage,
                disable: element.amount===0 ? true : false, 
                getTitle: element.title
            })
        });
    },
    methods:{
        sellPart(item){
            if (item.title==='Биомеханизм') {
                return this.$store.commit('sellPart', this.getStorageBio[0])
            } else if (item.title==='Процессор') {
                return this.$store.commit('sellPart', this.getStorageProc[0])
            } else if (item.title==='Душа'){
                return this.$store.commit('sellPart', this.getStorageSoul[0])
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.app__storage{
    margin-top: 100px;
}

.storage-items{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 60px;

    .storage-item{
        margin: 0 10px;
        
        *{
            margin: 5px 0;
        }

        .item__title{
            font-size: 20px;
            line-height: 32px;
            font-weight: 600;
        }

        .item__cost{
            color: #A3B8CC;
        }
    }
}
</style>