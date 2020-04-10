import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokedex from '../components/Pokedex.vue'
import Catch from '../components/Catch.vue'
import Pikachu from '../Pikachu.vue'
import Charmander from '../Charmander.vue'
import Bulbasaur from '../Bulbasaur.vue'
import Cubone from '../Cubone.vue'
import Eevee from '../Eevee.vue'
import Jigglypuff from '../Jigglypuff.vue'
import Meowth from '../Meowth.vue'
import Squirtle from '../Squirtle.vue'
import Togepi from '../Togepi.vue'
import Piplup from '../Piplup.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '', component: Pokedex },
  { path: '/catch', component: Catch },
  { path: '/pikachu', component: Pikachu },
  { path: '/charmander', component: Charmander },
  { path: '/bulbasaur', component: Bulbasaur },
  { path: '/cubone', component: Cubone },
  { path: '/eevee', component: Eevee },
  { path: '/jigglypuff', component: Jigglypuff },
  { path: '/meowth', component: Meowth },
  { path: '/squirtle', component: Squirtle },
  { path: '/togepi', component: Togepi },
  { path: '/piplup', component: Piplup },
]

const router = new VueRouter({
  routes
})

export default router
