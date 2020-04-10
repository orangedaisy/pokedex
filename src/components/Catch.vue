<template>
  <div class="catch-screen">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
    <caught-pokemon v-if="showModal" :pokemon="pokemonName"></caught-pokemon>
  </div>
</template>

<script>
  import { QrcodeStream } from 'vue-qrcode-reader'
  import CaughtPokemon from '@/components/CaughtPokemon'

  export default {
    components: { QrcodeStream, CaughtPokemon },
    data() {
      return {
        pokemonName: '',
        error: '',
        showModal: false
      }
    },
    methods: {
      onDecode(pokemonName) {
        this.$store.commit('pokeball', pokemonName);
        this.showModal = true;
      },
      async onInit(promise) {
        try {
          await promise
        } catch(error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          }
        }
      },
      beforeRouteLeave(from, next) {
        this.showModal = false;
        next();
      }
    }
  }
</script>

<style scoped>
  .catch-screen {
    @apply relative;
  }
</style>
