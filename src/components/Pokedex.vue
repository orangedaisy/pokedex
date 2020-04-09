<template>
  <!-- <div class="welcome" v-if="welcomeMsg"> -->
  <!--   <h3>Welcome, trainer!</h3> -->
  <!--   <p> -->
  <!--     Our world is inhabited by creatures that we call POKéMON. People and -->
  <!--     POKéMON live together by supporting each other. Some people play with -->
  <!--     POKéMON, some battle with them. But we don't know everything about -->
  <!--     POKéMON yet. With this POKéDEX, you can help us learn more about -->
  <!--     POKéMON by capturing each one you see in the wild. -->
  <!--   </p> -->
  <!--   <p>Enter your name below to begin your POKéMON adventure!</p> -->
  <!--   <input type="text" placeholder="Your name" v-model="trainerName"> -->
  <!--   <button @click="startAdventure(trainerName)">Let's go!</button> -->
  <!-- </div> -->
  <!-- <ul v-else> -->
  <ul>
    <li v-for="pokemon in pokemonList" :key="pokemon.name">
      <router-link :to="pokemon.name">
        <img height="152" width="160" :src="pokemonImage(pokemon.name)">
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      pokemonList() {
        return this.$store.state.caughtPokemon;
      }
    },
    methods: {
      pokemonImage(pokemon) {
        return require('@/assets/images/' + pokemon + '.png');
      }
    }
  }
</script>

<style>
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
</style>
