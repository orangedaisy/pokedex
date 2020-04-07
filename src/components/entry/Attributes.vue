<template>
  <div class="attributes">
    <dl class="stats">
      <div>
        <dt>Height</dt>
        <dd>{{ feet }}&prime; {{ inches }}&Prime;</dd>
      </div>
      <div>
        <dt>Weight</dt>
        <dd>{{ weight }} lbs</dd>
      </div>
      <div>
        <dt>Gender</dt>
        <dd>&#9794; &#9792;</dd>
      </div>
      <div>
        <dt>Category</dt>
        <dd>{{ category }}</dd>
      </div>
      <div>
        <dt>Abilities</dt>
        <dd v-for="ability in abilities" :key="ability.name">{{ ability }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
  export default {
    props: {
      feet: String,
      inches: String,
      weight: String,
      category: String,
      abilities: Array
    }
  }
</script>

<style>
  .attributes > dl {
    @apply bg-gray-200 -mx-4 mb-2 px-4 py-2;
    border-radius: 1rem;
    columns: 2;
  }

  .attributes > dl > * {
    page-break-inside: avoid;
  }

  .attributes > dl > * + * {
    margin-top: .5rem;
  }

  .attributes > dl dt {
    @apply text-gray-700;
  }

  .attributes > dl dd {
    @apply font-bold;
    margin-left: 1ch;
  }
</style>
