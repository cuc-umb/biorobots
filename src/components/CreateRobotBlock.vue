<template>
    <div class="app__creating-robot">
        <span class="scroll-indicate">05</span>
        <h2>Производство</h2>
        <div class="workshop">
            <div class="settings">
                <form>
                    <fieldset>
                        <p>Тип биоробота</p>
                        <input type="radio" name="robotType" class="custom-input custom-radio" v-model="robotType" id="frontend" value="frontend" checked>
                        <label for="frontend">frontend</label>
                        <input type="radio" name="robotType" class="custom-input custom-radio" v-model="robotType" id="design" value="design">
                        <label for="design">design</label>
                    </fieldset>
                    <fieldset>
                        <p>Стабилизатор</p>
                        <input type="radio" name="robotGender" class="custom-input custom-radio" v-model="robotGender" id="male" value="male" checked>
                        <label for="male">Male</label>
                        <input type="radio" name="robotGender" class="custom-input custom-radio" v-model="robotGender" id="female" value="female">
                        <label for="female">Female</label>
                    </fieldset>
                    
                    <default-button style="width:100%" :disabled="!createRobot()" />
                    <div class="callback">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ut voluptas quasi necessitatibus, laudantium delectus!</div>
                </form>
            </div>
            <div class="creating-robot-fields">
                <div class="creating-robot-fields__biomechanisms">
                    <div class="field biomechanisms-field" v-for="(field, index) in robotSet.biomechanisms" :key="index" @click="unlockFieldBio(index)" :class="{'accessed': field=='accessed',
                                                                    'blocked': field=='blocked',
                                                                    'unlocked': field=='unlocked'}"></div>
                </div>
                <div class="creating-robot-fields__processors">
                    <div class="field processors-field" v-for="(field, index) in robotSet.processors" :key="index" @click="unlockFieldProc(index)" :class="[{blocked: field=='blocked', 
                                                                        unlocked: field=='unlocked',
                                                                        accessed: field=='accessed'}]"></div>
                </div>

                <div class="field creating-robot-fields__soul" v-for="(field, index) in robotSet.soul" :key="index" @click="unlockFieldSoul(index)" :class="[{blocked: field=='blocked', 
                                                                        unlocked: field=='unlocked',
                                                                        accessed: field=='accessed'}]"></div>
            </div>
            <div class="robot" :class="[{'designer-female': robotType=='design' && robotGender=='female'},
                                        {'frontend-female': robotType=='frontend' && robotGender=='female'},
                                        {'designer-male': robotType=='design' && robotGender=='male'},
                                        {'frontend-male': robotType=='frontend' && robotGender=='male'}, 'blocked']"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import defaultButton from './buttons/defaultButton.vue';

export default {
  components: { defaultButton },
    data(){
        return{
            robotType: 'frontend',
            robotGender: 'male',
        }
    },
    computed: {
        ...mapGetters({
            getStorageBio: 'getStorageBio',
            getStorageProc: 'getStorageProc',
            getStorageSoul: 'getStorageSoul'
        }),
        ...mapState({
            robotSet: state => state.robotSet,
            storage: state => state.storage,
            selled: state => state.selled
        }), 
    },
    created(){
        this.storage.forEach(element => {
            this.$store.commit('changeStatus', element)
        });
    },
    methods:{
        unlockFieldBio(field){
            if (field!='blocked') this.$store.commit('unlockFieldBio', {currentField: field, partType: this.getStorageBio[0]})
        },
        unlockFieldProc(field){
            if (field!='blocked') this.$store.commit('unlockFieldProc', {currentField: field, partType: this.getStorageProc[0]})
        },
        unlockFieldSoul(field){
            if (field!='blocked') this.$store.commit('unlockFieldSoul', {currentField: field, partType: this.getStorageSoul[0]})
        },
        createRobot(){
            this.$store.commit('createRobot')
        }
    },
    watch:{
        // selled(el){
        //     console.log(el)
        // }
        // 'getStorageBio'(el) {
        //     console.log(el[0].amount);
        //     this.$store.commit('changeStatus', this.getStorageBio[0])
        // },
        // 'getStorageProc'(el) {
        //     console.log(el[0].amount);
        //     this.$store.commit('changeStatus', this.getStorageProc[0])
        // },
        // 'getStorageSoul'(el) {
        //     console.log(el[0].amount);
        //     this.$store.commit('changeStatus', this.getStorageProc[0])
        // }

    }
}
</script>

<style lang="scss" scoped>
.app__creating-robot{
    margin-top: 100px;
}

.workshop{
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
}

.creating-robot-fields__biomechanisms, .creating-robot-fields__processors{
    display: flex;
    flex-wrap: nowrap;
}

fieldset{
    margin-bottom: 32px;

    label{
        margin: 24px 30px 0 0;
    }
}

.callback{
    float: right;
}

.field{
    width: 48px;
    height: 48px;
    border: 2px solid;
    border-radius: 4px; 
    margin: 5px;
    background: center / 70% no-repeat; 
}

.biomechanisms-field {
    &.unlocked{
        background-image: url('../assets/robot-parts/constructor/BiomechanismUnlocked.png');
        border-color: #FF7F22;
        cursor: pointer;
    }
    &.accessed{
        background-image: url('../assets/robot-parts/constructor/BiomechanismAccessed.png');
        background-color: #333940;
        border: none;
        cursor: pointer;
    }
    &.blocked{
        background-image: url('../assets/robot-parts/constructor/BiomechanismBlocked.png');
        background-color: #333940;
        border: none;
    }
}

.processors-field {
    &.unlocked{
        background-image: url('../assets/robot-parts/constructor/ProcessorUnlocked.png');
        border-color: #FF7F22;
        cursor: pointer;
    }
    &.accessed{
        background-image: url('../assets/robot-parts/constructor/ProcessorAccessed.png');
        background-color: #333940;
        border: none;
        cursor: pointer;
    }
    &.blocked{
        background-image: url('../assets/robot-parts/constructor/ProcessorBlocked.png');
        background-color: #333940;
        border: none;
    }
}

.creating-robot-fields__soul{
    &.unlocked{
        background-image: url('../assets/robot-parts/constructor/SoulUnlocked.svg');
        border-color: #FF7F22;
        cursor: pointer;
    }
    &.accessed{
        background-image: url('../assets/robot-parts/constructor/SoulAccessed.svg');
        background-color: #333940;
        border: none;
        cursor: pointer;
    }
    &.blocked{
        background-image: url('../assets/robot-parts/constructor/SoulBlocked.svg');
        background-color: #333940;
        border: none;
    }
}
</style>