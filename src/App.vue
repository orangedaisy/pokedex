<template>
  <div id="app">

    <header>
      <h3 class="trainer" v-if="!welcomeMsg">{{ trainerName }}</h3>
    </header>

    <template v-if="welcomeMsg">
      <div class="welcome">
        <h3>Welcome, trainer!</h3>
        <p>
          Our world is inhabited by creatures that we call POKéMON. People and
          POKéMON live together by supporting each other. Some people play with
          POKéMON, some battle with them. But we don't know everything about
          POKéMON yet. With this POKéDEX, you can help us learn more about
          POKéMON by capturing each one you see in the wild.
        </p>
        <p>Enter your name below to begin your POKéMON adventure!</p>
        <input type="text" placeholder="Your name" v-model="trainerName">
        <button @click="startAdventure(trainerName)">Let's go!</button>
      </div>
    </template>

    <template v-else>
      <ul>
        <li v-for="pokemon in pokemonList" :key="pokemon.name">
          <img height="152" width="160" :src="pokemonImage(pokemon.name)">
        </li>
      </ul>
    </template>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        welcomeMsg: true,
        trainerName: '',
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
      startAdventure(name) {
        this.trainerName = name;
        this.welcomeMsg = false;
      },
      pokemonImage(pokemon) {
        return require('./assets/images/' + pokemon + '.png');
      }
    }
  }
</script>

<style lang="scss">

  #app {
    @apply bg-red-700 m-auto max-w-sm min-h-screen;
  }

  #app header {
    @apply bg-red-800 border-b-4 border-red-900 relative flex;
    height: 4.5rem;
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
    @apply ml-auto leading-none py-1 px-5 border-4 border-red-900 rounded-lg text-green-900 bg-green-400 text-xl font-black self-center mr-4;
  }

  #app .welcome {
    @apply mx-4 my-4 bg-gray-300 border-4 border-red-900 rounded-lg p-4;
  }

  #app .welcome h3 {
    @apply text-2xl font-black text-center leading-none;
  }

  #app .welcome input {
    @apply rounded-lg p-2 border-4 border-red-900 block w-full text-center;
  }

  #app .welcome button {
    @apply block bg-green-500 text-white text-center rounded-lg border-4 border-green-700 w-full p-2 uppercase font-bold transition-colors duration-200 ease-out;
  }

  #app .welcome button:hover,
  #app .welcome button:focus {
    @apply bg-green-600 border-green-800;
  }

  #app .welcome button:active {
    @apply bg-green-700 border-green-900;
  }

  #app .welcome * + * {
    @apply mt-4;
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
