<template>
  <div>
    <welcome v-if="welcomeMsg"></welcome>
    <div class="pokedex" v-else>
      <ul v-if="pokemonList.length">
        <li v-for="pokemon in pokemonList" :key="pokemon.name">
          <router-link :to="pokemon.name">
            <img height="152" width="160" :src="pokemonImage(pokemon.name)">
          </router-link>
        </li>
      </ul>
      <empty-pokedex v-else></empty-pokedex>
      <footer v-if="wildPokemon.length">
        <router-link class="button" to="/catch">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" xml:space="preserve"><g><path fill="#ffffff" d="M77.927,49.981c0-0.06-0.013-0.115-0.018-0.174C77.805,34.5,65.324,22.08,49.995,22.08   c-15.396,0-27.921,12.524-27.921,27.92c0,15.396,12.525,27.92,27.921,27.92c15.347,0,27.838-12.447,27.916-27.777   C77.915,50.088,77.927,50.036,77.927,49.981z M49.995,26.252c12.384,0,22.579,9.53,23.649,21.642H60.945   c-0.987-5.148-5.519-9.051-10.951-9.051c-5.432,0-9.963,3.903-10.951,9.051H26.345C27.414,35.783,37.609,26.252,49.995,26.252z    M56.979,50c0,3.851-3.134,6.983-6.984,6.983c-3.851,0-6.984-3.133-6.984-6.983c0-3.851,3.133-6.984,6.984-6.984   C53.845,43.016,56.979,46.149,56.979,50z M49.995,73.748c-12.398,0-22.602-9.551-23.653-21.681h12.697   c0.973,5.166,5.512,9.089,10.957,9.089c5.445,0,9.984-3.923,10.957-9.089h12.694C72.594,64.197,62.392,73.748,49.995,73.748z"/><circle fill="#ffffff" cx="49.994" cy="50" r="3.42"/></g></svg>
          Catch!
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
  import Welcome from '@/components/Welcome';
  import EmptyPokedex from '@/components/EmptyPokedex';

  export default {
    components: {
      welcome: Welcome,
      emptyPokedex: EmptyPokedex
    },
    computed: {
      welcomeMsg() {
        return this.$store.state.welcomeMsg;
      },
      pokemonList() {
        return this.$store.state.caughtPokemon;
      },
      wildPokemon() {
        return this.$store.state.catchList;
      }
    },
    methods: {
      pokemonImage(pokemon) {
        return require('@/assets/images/' + pokemon + '.png');
      }
    }
  }
</script>

<style scoped>
  div > div {
    @apply flex flex-col;
  }

  .pokedex {
    @apply flex flex-col flex-grow;
  }

  .pokedex > *:first-child {
    @apply flex-grow;
  }

  ul {
    @apply grid grid-cols-2 gap-4 p-4;
    grid-auto-rows: 10rem;
  }

  ul li {
    @apply bg-gray-300 border-4 border-red-900 rounded-lg;
  }

  ul li img {
    @apply h-full w-full object-contain;
  }

  footer {
    @apply sticky bottom-0 bg-red-800 border-t-4 border-red-900 py-2 px-4;
  }

  footer a {
    @apply block pt-4 text-xl;
  }

  footer a svg {
    @apply inline-block h-16 w-16 -mr-3 -mt-3 -mb-1;
  }
</style>
