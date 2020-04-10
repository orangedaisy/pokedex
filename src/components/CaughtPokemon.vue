<template>
  <div class="modal">
    <p>Nice! You caught</p>
    <h3>{{ pokemon }}</h3>
    <img :src="pokemonImage(pokemon)" :alt="pokemon">
    <router-link class="button" :to="pokemon">
      View Details
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['pokemon'],
    methods: {
      pokemonImage(name) {
        return require('@/assets/images/' + name + '.png');
      }
    }
  }
</script>

<style scoped>
  .modal {
    @apply absolute inset-0 text-white text-center p-4;
    background-color: rgba(0,0,0,.5);
  }

  p {
    @apply text-xl font-bold;
    text-shadow: 0 .063em .25em rgba(0,0,0,.75);
  }

  h3 {
    @apply font-black capitalize text-4xl my-4;
    text-shadow: 0 .063em .25em rgba(0,0,0,.75);
  }

  img {
    @apply mx-auto my-8;
    filter: drop-shadow(0 0 .25em rgb(247,250,252));
    width: 75%;
  }

  a svg {
    @apply inline-block -mt-1;
  }
</style>
