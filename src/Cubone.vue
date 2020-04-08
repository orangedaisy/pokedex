<template>
  <div id="entry" class="cubone">

    <entry-header>
      <h1 slot="name-number"><small>#104</small> Cubone</h1>
      <entry-type type="Ground" slot="type"></entry-type>
      <img src="./assets/images/cubone.png" alt="Cubone" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Cubone pines for the mother it will never see again. Seeing a likeness
        of its mother in the full moon, it cries. The stains on the skull the
        Pokémon wears are made by the tears it sheds.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="04"
        weight="14.3"
        category="Lonely"
        :abilities="['Rock Head', 'Lightning Rod']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Grass"></entry-type>
      <entry-type type="Ice"></entry-type>
      <entry-type type="Water"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-yellow-300 text-yellow-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #faf089, /* yellow-300 */
        #d69e2e /* yellow-600 */
      );
  }
</style>
