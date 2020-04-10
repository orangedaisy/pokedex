<template>
  <div id="app">

    <header>
      <trainer-name v-if="showTrainer"></trainer-name>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
  import Trainer from '@/components/Trainer';

  export default {
    components: {
      trainerName: Trainer
    },
    computed: {
      showTrainer() {
        return !this.$store.state.welcomeMsg;
      }
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
</style>
