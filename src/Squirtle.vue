<template>
  <div id="entry" class="squirtle">

    <entry-header>
      <h1 slot="name-number"><small>#007</small> Squirtle</h1>
      <entry-type type="Water" slot="type"></entry-type>
      <img src="./assets/images/squirtle.png" alt="Squirtle" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Squirtle's shell is not merely used for protection. The shell's rounded
        shape and the grooves in its surface help minimize resistance in water,
        enabling this Pokémon to swim at high speeds.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="08"
        weight="19.8"
        category="Tiny Turtle"
        :abilities="['Torrent']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Electric"></entry-type>
      <entry-type type="Grass"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-blue-200 text-blue-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #ebf8ff, /* blue-100 */
        #63b3ed /* blue-400 */
      );
  }
</style>
