<template>
  <div id="entry" class="charmander">

    <entry-header>
      <h1 slot="name-number"><small>#004</small> Charmander</h1>
      <entry-type type="Fire" slot="type"></entry-type>
      <img src="./assets/images/charmander.png" alt="Charmander" slot="image">
    </entry-header>

    <div>
      <h2>Description</h2>
      <p class="description">
        The flame that burns at the tip of its tail is an indication of its
        emotions. The flame wavers when Charmander is enjoying itself. If the
        Pokémon becomes enraged, the flame burns fiercely.
      </p>
      <h2>Attributes</h2>
      <entry-attributes
        feet="2"
        inches="00"
        weight="18.7"
        category="Lizard"
        :abilities="['Blaze']">
      </entry-attributes>
      <h2>Weakness</h2>
      <entry-type type="Ground"></entry-type>
      <entry-type type="Rock"></entry-type>
      <entry-type type="Water"></entry-type>
    </div>

  </div>
</template>

<style scoped lang="scss">
  header {
    @apply bg-red-300 text-yellow-900;
    background-image:
      radial-gradient(
        circle at bottom center,
        #feb2b2, /* red-300 */
        #e53e3e /* red-600 */
      );
  }
</style>
