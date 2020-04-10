<template>
  <div>
    <div class="text">
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
  p {
    @apply text-center;
  }

  li {
    @apply mt-4 px-4;
  }

  button {
    @apply block py-2 px-8 capitalize w-full;
  }
</style>
