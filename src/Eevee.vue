<template>
  <div id="entry" class="eevee">

    <entry-header>
      <h1 slot="name-number"><small>#133</small> Eevee</h1>
      <entry-type type="Normal" slot="type"></entry-type>
      <img src="./assets/images/eevee.png" alt="Eevee" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Eevee has an unstable genetic makeup that suddently mutates due to the
        environment in which it lives. Radiation from various stones causes this
        Pokémon to evolve.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="00"
        weight="14.3"
        category="Evolution"
        :abilities="['Run Away', 'Adapttability']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Fighting"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-orange-300 text-orange-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #fbd38d, /* orange-300 */
        #dd6b20 /* orange-600 */
      );
  }
</style>
