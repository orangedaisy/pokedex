<template>
  <div id="entry" class="bulbasaur">

    <entry-header>
      <h1 slot="name-number"><small>#001</small> Bulbasaur</h1>
      <entry-type type="Grass" slot="type"></entry-type>
      <entry-type type="Poison" slot="type"></entry-type>
      <img src="./assets/images/bulbasaur.png" alt="Bulbasaur" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Bulbasaur can be seen napping in bright sunlight. There is a seed on
        its back. By soaking up the sun's rays, the seed grows progressively
        larger.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="2"
        inches="04"
        weight="15.2"
        category="Seed"
        :abilities="['Overgrow']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Fire"></entry-type>
      <entry-type type="Flying"></entry-type>
      <entry-type type="Ice"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-teal-200 text-teal-800;
    background-image:
      radial-gradient(
        circle at bottom center,
        #b2f5ea, /* teal-200 */
        #48bb78 /* green-500 */
      );
  }
</style>
