<template>
  <div id="entry" class="jigglypuff">

    <entry-header>
      <h1 slot="name-number"><small>#039</small> Jigglypuff</h1>
      <entry-type type="Normal" slot="type"></entry-type>
      <entry-type type="Fairy" slot="type"></entry-type>
      <img src="./assets/images/jigglypuff.png" alt="Jigglypuff" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Jigglypuff's vocal cords can freely adjust the wavelength of its voice.
        This Pokémon uses this ability to sing at precisely the right wavelength
        to make its foes most drowsy.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="08"
        weight="12.1"
        category="Balloon"
        :abilities="['Cute Charm', 'Competitive']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Steel"></entry-type>
      <entry-type type="Poison"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-pink-100 text-pink-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #fff5f7, /* pink-100 */
        #f687b3 /* pink-400 */
      );
  }
</style>
