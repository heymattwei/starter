<template>
  <section class="Section">
    <div v-if="sectionBack" class="SectionBack">
    </div>
    <div class="SectionFront">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionBack: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.Section {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  &Back, &Front {
    width: 100%;
    height: 100%;
  }

  &Back {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &Front {
    text-align: center;
  }
}
</style>
