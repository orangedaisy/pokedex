<template>
  <div>
    <div>
      <h3>Catch that POKéMON!</h3>
      <p>Which POKéMON do you see?</p>
    </div>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        <button class="button" @click="catchPokemon(pokemon.name)">
          {{ pokemon.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      pokemonList() {
        return this.$store.state.catchList;
      }
    },
    methods: {
      catchPokemon(pokemon) {
        this.$store.commit('pokeball', pokemon);
        this.$router.push(`/${pokemon}`);
      }
    }
  }
</script>

<style scoped>
  div {
    @apply p-4;
  }

  div > div > div {
    @apply bg-gray-300 border-4 border-red-900 rounded-lg p-4 text-center;
  }

  h3 {
    @apply text-2xl font-black leading-none mb-2;
  }

  li {
    @apply mt-4;
  }

  button {
    @apply block py-2 px-8 capitalize w-full;
  }
</style>
