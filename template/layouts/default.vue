<template>
  <div>
    <AppNav :nav-front="navFront" />
    <nuxt />
  </div>
</template>

<script>
import AppNav from '~components/Nav'

export default {
  data () {
    return {
      navFront: {
        start: [
          { type: 'nuxt-link', img: require('~assets/img/logo.png'), content: 'Nuxt Start', to: '/', hideContent: true }
        ],
        end: [
          { type: 'nuxt-link', content: 'About', to: '/about' },
          { type: 'nuxt-link', content: 'Contact', to: '/contact' }
        ]
      }
    }
  },
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
</style>
