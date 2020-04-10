<template>
  <div>
    <div class="text">
      <p>Nice! You caught</p>
      <h3>{{ pokemonName }}</h3>
      <img :src="pokemonImage(pokemonName)" :alt="pokemonName">
      <router-link class="button" :to="`/${pokemonName}`">
        View Details
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pokemon'],
    data() {
      return {
        pokemonName: this.$route.params.pokemon
      }
    },
    methods: {
      pokemonImage(name) {
        return require('@/assets/images/' + name + '.png');
      }
    }
  }
</script>

<style scoped>
  .text {
    @apply text-center;
  }

  h3 {
    @apply mt-2 capitalize;
  }

  img {
    @apply mx-auto my-8;
    filter: drop-shadow(0 0 .5em rgba(45,55,72,.5));
    width: 75%;
  }

  a svg {
    @apply inline-block -mt-1;
  }
</style>
