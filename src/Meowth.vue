<template>
  <div id="entry" class="meowth">

    <entry-header>
      <h1 slot="name-number"><small>#052</small> Meowth</h1>
      <entry-type type="Normal" slot="type"></entry-type>
      <img src="./assets/images/meowth.png" alt="Meowth" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Meowth withdraws its sharp claws into its paws to slinkily sneak about
        without making any incriminating footsteps. For some reason, this
        Pokémon love shiny coins that glitter with light.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="04"
        weight="9.3"
        category="Scratch Cat"
        :abilities="['Pickup', 'Technician']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Fighting"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-gray-200 text-yellow-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #edf2f7, /* gray-200 */
        #faf089 /* yellow-300 */
      );
  }
</style>
