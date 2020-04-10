<template>
  <div class="text">
    <h3>Welcome, trainer!</h3>
    <p>
      Our world is inhabited by creatures that we call POKéMON. People and
      POKéMON live together by supporting each other. Some people play with
      POKéMON, some battle with them. But we don't know everything about
      POKéMON yet. With this POKéDEX, you can help us learn more about
      POKéMON by capturing each one you see in the wild.
    </p>
    <p>Enter your name below to begin your POKéMON adventure!</p>
    <form @submit.prevent="startAdventure(name)">
      <input type="text" placeholder="Your name" v-model="name" required>
      <button class="button">Let's go!</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      startAdventure(name) {
        this.$store.commit('setName', name);
        this.$store.commit('openPokedex', false);
      }
    }
  }
</script>

<style scoped>
  .text input {
    @apply rounded-lg p-2 border-4 border-red-900 block w-full text-center mb-4;
  }
</style>
