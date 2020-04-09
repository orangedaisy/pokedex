<template>
  <h3 class="trainer">{{ trainerName }}</h3>
</template>

<script>
  export default {
    computed: {
      trainerName() {
        return this.$store.state.trainerName;
      }
    }
  }
</script>

<style scoped lang="scss">
  .trainer {
    @apply ml-auto leading-none py-1 px-5 border-4 border-red-900 rounded-lg text-green-900 bg-green-400 text-xl font-black self-center mr-4;
  }
</style>
