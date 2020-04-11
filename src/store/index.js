import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      trainerName: '',
      welcomeMsg: true,
      catchList: [
          { name: 'bulbasaur' },
          { name: 'charmander' },
          { name: 'squirtle' },
          { name: 'pikachu' },
          { name: 'jigglypuff' },
          { name: 'meowth' },
          { name: 'cubone' },
          { name: 'eevee' },
          { name: 'togepi' },
          { name: 'piplup' },
      ],
      caughtPokemon: []
  },
  mutations: {
      setName: (state, payload) => {
          state.trainerName = payload;
      },
      openPokedex: (state, payload) => {
          state.welcomeMsg = payload;
      },
      pokeball: (state, payload) => {
          let pokemon = state.catchList.find(item => item.name == payload);
          let pokemonIndex = state.catchList.indexOf(pokemon);
          state.catchList.splice(pokemonIndex, 1);
          state.caughtPokemon.unshift(pokemon);
      }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
