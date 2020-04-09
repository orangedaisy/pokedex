import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      trainerName: 'Owen',
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
  }
})
