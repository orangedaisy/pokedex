<template>
  <div id="app">

    <header>
      <trainer-name></trainer-name>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
  import Trainer from '@/components/Trainer';

  export default {
    components: {
      trainerName: Trainer
    }
  }
</script>

<style lang="scss">
  #app {
    @apply bg-red-700 m-auto max-w-sm min-h-screen w-full flex flex-col;
  }

  #app > header {
    @apply bg-red-800 border-b-4 border-red-900 relative flex;
    height: 4.5rem;
  }

  #app > header::before {
    @apply bg-teal-400 border-4 border-white rounded-full block absolute w-12 h-12;
    content: '';
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  #app > header::after {
    @apply bg-red-400 rounded-full block w-4 h-4 absolute;
    box-shadow:
      1.5rem 0 0 #faf089,
      3rem 0 0 #68d391;
    content: '';
    left: 4.5rem;
    top: .5rem;
  }

  #app > div {
    @apply flex-grow;
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
</style>
