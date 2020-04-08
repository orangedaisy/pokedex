<template>
  <div id="entry" class="piplup">

    <entry-header>
      <h1 slot="name-number"><small>#393</small> Piplup</h1>
      <entry-type type="Water" slot="type"></entry-type>
      <img src="./assets/images/piplup.png" alt="Piplup" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        Because it is very proud, it hates accepting food from people. Its thick
        down guards it from cold.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="1"
        inches="04"
        weight="11.5"
        category="Penquin"
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
        #c3dafe, /* indigo-200 */
        #4299e1 /* blue-500 */
      );
  }
</style>
