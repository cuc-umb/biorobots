import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selled: '',
    wallet: 0,
    maxWallet: 100,
    market: [
      {
        title: "Биомеханизм",
        cost: 7,
        img: require("../assets/robot-parts/biomechanism.png"),
        disabled: true,
      },
      {
        title: "Процессор",
        cost: 5,
        img: require("../assets/robot-parts/processor.png"),
        disabled: true,
      },
      {
        title: "Душа",
        cost: 25,
        img: require("../assets/robot-parts/soul.png"),
        disabled: true,
      },
    ],
    storage: [
      { title: "Биомеханизм", cost: 5, amount: 0, disabled: true },
      { title: "Процессор", cost: 3, amount: 0, disabled: true },
      { title: "Душа", cost: 15, amount: 0, disabled: true },
    ],
    robotSet: {
      biomechanisms: ["blocked", "blocked", "blocked", "blocked"],
      processors: ["blocked", "blocked", "blocked", "blocked"],
      soul: ["blocked"],
    },
    completeRobotSet: {
      biomechanisms: ["unlocked", "unlocked", "unlocked", "unlocked"],
      processors: ["unlocked", "unlocked", "unlocked", "unlocked"],
      soul: ["unlocked"],
    },
  },
  getters: {
    getMarketBio: (state) =>
      state.market.filter((market) => market.title === "Биомеханизм"),
    getMarketProc: (state) =>
      state.market.filter((market) => market.title === "Процессор"),
    getMarketSoul: (state) =>
      state.market.filter((market) => market.title === "Душа"),

    getStorageBio: (state) =>
      state.storage.filter((storage) => storage.title === "Биомеханизм"),
    getStorageProc: (state) =>
      state.storage.filter((storage) => storage.title === "Процессор"),
    getStorageSoul: (state) =>
      state.storage.filter((storage) => storage.title === "Душа"),
  },
  mutations: {
    increaseWallet(state, payload) {
      return state.wallet < state.maxWallet
        ? (state.wallet += payload)
        : (state.wallet = state.maxWallet);
    },
    disablingButtons(state, payload) {
      if (payload.arrType == state.market) {
        state.market.forEach((element) => {
          if (element.title === payload.getTitle) {
            element.disabled = payload.disable;
          }
        });
      } else {
        state.storage.forEach((element) => {
          if (element.title === payload.getTitle) {
            element.disabled = payload.disable;
          }
        });
      }
    },
    installPart(state, payload) {
      state.storage.forEach((element) => {
        if (element.title === payload[0].title) {
          element.amount += 1;
          state.wallet -= payload[0].cost;
        }
      });
    },
    sellPart(state, payload) {
      state.storage.forEach((element) => {
        if (element.title === payload.title) {
          state.selled = payload.title
          element.amount -= 1;
          state.wallet += payload.cost;
        }
      });
    },
    changeStatus(state, payload) {
      if (payload.title == "Биомеханизм") {
        state.robotSet.biomechanisms.fill('blocked')
        if (payload.amount > 0) {
          state.robotSet.biomechanisms.fill('accessed', 0, payload.amount)
        }
      } else if (payload.title == "Процессор") {
        state.robotSet.processors.fill('blocked')
        if (payload.amount > 0) {
          state.robotSet.processors.fill('accessed', 0, payload.amount)
        }
      } else if (payload.title == "Душа") {
        state.robotSet.soul.fill('blocked')
        if (payload.amount > 0) {
          state.robotSet.soul.fill('accessed')
        }
      } 
    },
    unlockFieldBio(state, payload){
      state.storage.forEach(element => {
        if (element.title == payload.partType.title) {
            if (state.robotSet.biomechanisms[payload.currentField]=='accessed') {
              state.robotSet.biomechanisms.splice(payload.currentField, 1, 'unlocked')
              element.amount-=1
            }else if (state.robotSet.biomechanisms[payload.currentField]=='unlocked'){
              state.robotSet.biomechanisms.splice(payload.currentField, 1, 'accessed')
              element.amount+=1
            }
          }
        });
    },   
    unlockFieldProc(state, payload){
      state.storage.forEach(element => {
        if (element.title == payload.partType.title) {
            if (state.robotSet.processors[payload.currentField]=='accessed') {
              state.robotSet.processors.splice(payload.currentField, 1, 'unlocked')
              element.amount-=1
            }else if (state.robotSet.processors[payload.currentField]=='unlocked'){
              state.robotSet.processors.splice(payload.currentField, 1, 'accessed')
              element.amount+=1
            }
          }
        });
    },
    unlockFieldSoul(state, payload){
      state.storage.forEach(element => {
        if (element.title == payload.partType.title) {
          if (state.robotSet.soul[payload.currentField]=='accessed') {
            state.robotSet.soul.splice(payload.currentField, 1, 'unlocked')
            element.amount-=1
          }else if (state.robotSet.soul[payload.currentField]=='unlocked'){
            state.robotSet.soul.splice(payload.currentField, 1, 'accessed')
            element.amount+=1
          }
        }
      });
    },
    createRobot(state){
      return state.robotSet == state.completeRobotSet
    }
  },
});
