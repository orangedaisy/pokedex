<template>
  <div id="entry" class="pikachu">

    <entry-header>
      <entry-back-button slot="back-button"></entry-back-button>
      <h1 slot="name-number"><small>#025</small> Pikachu</h1>
      <entry-type type="Electric" slot="type"></entry-type>
      <!-- <span class="type electric">Electric</span> -->
      <img src="./assets/images/pikachu.png" alt="Pikachu" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Whenever Pikachu comes across something new, it blasts it with a jolt
        of electricity. If you come across a blackened berry, it's evidence
        that this Pokémon mistook the intensity of its charge.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="04"
        weight="13.2"
        category="Mouse"
        :abilities="['Static']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Ground"></entry-type>
    </div>

  </div>
</template>

<style lang="scss">
  header {
    @apply bg-yellow-200 text-yellow-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #fefcbf, /* yellow-200 */
        #eec94b /* yellow-500 */
      );
  }

  header small {
    @apply text-yellow-700;
  }
</style>
