<template>
  <nuxt-link class="NavLink" :to="navLink.to" :title="navLink.content">
    <img class="NavLinkImg" v-if="navLink.img" :src="navLink.img" :alt="navLink.content" />
    <span class="NavLinkContent" v-show="!navLink.hideContent">{{ navLink.content }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    navLink: {
      type: Object,
      element: String,
      img: String,
      content: String,
      to: String,
      hideContent: {
        type: Boolean,

        /*
        ** TODO: Validate hideContent based on defined navLink.img key
        ** LINK: https://vuejs.org/v2/guide/components.html#Prop-Validation
        */
        default: true
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';

.NavLink {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;

  width: auto;
  height: 100%;
  padding: .5rem 1rem;

  transition: background-color 150ms $global-cubic-bezier;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  &Img {
    width: auto;
    height: 100%;

    // add margin to left of content if it is next to an img element
    & + .NavLinkContent {
      margin-left: .75rem;
    }
  }

  &Content {
    color: currentColor;
  }
}
</style>
