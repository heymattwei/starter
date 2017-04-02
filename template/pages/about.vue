<template>
  <AppSection>
    <h1>About Nuxt.js</h1>
    <p>
      Nuxt.js is a universal Vue.js application framework. This page was rendered on the {{ ssr }}.
    </p>
  </AppSection>
</template>

<script>
import AppSection from '~components/Section'

export default {
  components: {
    AppSection
  },
  asyncData (context) {
    return {
      ssr: context.isServer ? 'server' : 'client'
    }
  }
}
</script>

<style lang="scss">

</style>
