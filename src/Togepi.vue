<template>
  <div id="entry" class="togepi">

    <entry-header>
      <h1 slot="name-number"><small>#175</small> Togepi</h1>
      <entry-type type="Fairy" slot="type"></entry-type>
      <img src="./assets/images/togepi.png" alt="Togepi" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        As its energy, Togepi uses the positive emotions of compassion and
        pleasure exuded by people and Pokémon. This Pokémon stores up feelings
        of happiness inside its shell, then shares them with others.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="00"
        weight="3.3"
        category="Spike Ball"
        :abilities="['Serene Grace', 'Hustle']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Steel"></entry-type>
      <entry-type type="Poison"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-pink-200 text-pink-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #bee3f8, /* blue-200 */
        #fc8181 /* red-400 */
      );
  }
</style>
