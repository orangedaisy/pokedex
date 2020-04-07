<template>
  <span class="type" :class="type.toLowerCase()">{{ type }}</span>
</template>

<script>
  export default {
    props: ['type']
  }
</script>

<style>
  .type {
    @apply border-2 rounded-full inline-block font-bold px-5 py-2 text-center leading-none;
    min-width: 6ch;
  }

  .type.electric {
    @apply bg-yellow-400 border-yellow-500 text-gray-800;
  }

  .type.ground {
    @apply bg-orange-800 border-orange-900 text-gray-100;
  }

  .type.fire {
    @apply bg-red-600 border-red-700 text-red-100;
  }

  .type.rock {
    @apply bg-gray-700 border-gray-800 text-gray-100;
  }

  .type.water {
    @apply bg-blue-600 border-blue-700 text-blue-100;
  }

  .type.grass {
    @apply bg-green-600 border-green-700 text-green-100;
  }

  .type.poison {
    @apply bg-purple-700 border-purple-800 text-purple-100;
  }

  .type.flying {
    @apply bg-gray-300 border-gray-400 text-gray-700;
  }

  .type.ice {
    @apply bg-indigo-200 border-indigo-300 text-indigo-800;
  }
</style>
