<template>
  <AppSection>
    <h1>{{ error.statusCode }}</h1>
    <p>
      {{ error.message }}
    </p>
    <nuxt-link to="/">Go Home</nuxt-link>
  </AppSection>
</template>

<script>
import AppSection from '~components/Section'

export default {
  components: {
    AppSection
  },
  props: [ 'error' ]
}
</script>

<style lang="scss">
</style>
