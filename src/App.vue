<template>
  <div id="app">

    <header>
      <h3 class="trainer">
        Owen
      </h3>
    </header>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        <img :src="pokemonImage(pokemon.name)">
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        pokemonList: [
          { name: 'bulbasaur' },
          { name: 'charmander' },
          { name: 'cubone' },
          { name: 'eevee' },
          { name: 'jigglypuff' },
          { name: 'meowth' },
          { name: 'pikachu' },
          { name: 'piplup' },
          { name: 'squirtle' },
          { name: 'togepi' }
        ]
      }
    },
    methods: {
      pokemonImage(pokemon) {
        return require('./assets/images/' + pokemon + '.png');
      }
    }
  }
</script>

<style lang="scss">

  #app {
    @apply bg-red-700 m-auto max-w-sm min-h-full;
  }

  #app header {
    @apply bg-red-800 border-b-4 border-red-900 relative p-4 flex;
  }

  #app header::before {
    @apply bg-teal-400 border-4 border-white rounded-full block absolute w-12 h-12;
    content: '';
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  #app header::after {
    @apply bg-red-400 rounded-full block w-4 h-4 absolute;
    box-shadow:
      1.5rem 0 0 #faf089,
      3rem 0 0 #68d391;
    content: '';
    left: 4.5rem;
    top: .5rem;
  }

  #app .trainer {
    @apply ml-auto leading-none py-1 px-5 border-4 border-red-900 rounded-lg text-green-900 bg-green-400 text-xl font-black;
  }

  #app ul {
    @apply grid grid-cols-2 gap-4 p-4;
    grid-auto-rows: 10rem;
  }

  #app ul li {
    @apply bg-gray-300 border-4 border-red-900 rounded-lg;
  }

  #app ul li img {
    @apply h-full w-full object-contain;
  }

</style>
