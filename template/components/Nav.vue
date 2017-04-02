<template>
  <nav :class="{ 'Nav': true, 'expanded': this.$store.state.nav.expanded }">
    <div class="NavBack">
    </div>
    <div v-if="navFront" class="NavFront">
      <div v-if="navFront.start" class="NavFrontStart" @click="handleExpand()">
        <NavLink v-for="startLink in navFront.start" :key="startLink.content" :nav-link="startLink" />
      </div>
      <div v-if="navFront.center" class="NavFrontCenter">
        <NavLink v-for="centerLink in navFront.center" :key="centerLink.content" :nav-link="centerLink" />
      </div>
      <div v-if="navFront.end" class="NavFrontEnd">
        <NavLink v-for="endLink in navFront.end" :key="endLink.content" :nav-link="endLink" />
      </div>
    </div>
  </nav>
</template>

<script>
import NavLink from '~components/NavLink'

export default {
  props: {
    navBack: Object,
    navFront: {
      type: Object,
      start: Array,
      center: Array,
      end: Array
    },
    expansion: {
      type: Object,
      mode: String
    }
  },
  components: {
    NavLink
  },
  methods: {
    handleExpand () {
      if (!this.$store.state.nav.expanded) {
        this.$store.commit('nav/expand', true)
      } else {
        this.$store.commit('nav/expand', false)
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';

$nav-height: 3rem;

.Nav {
  position: relative;

  width: 100%;
  height: $nav-height;
  box-shadow: 0 .25rem .5rem rgba(0, 0, 0, .05);

  &Back, &Front {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  &Back {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &Front {
    position: relative;

    margin-right: auto;
    margin-left: auto;
    max-width: $global-max-width;

    justify-content: space-between;

    &Start, &Center, &End {
      display: flex;
      flex-grow: 1;
      align-items: center;

      height: inherit;
    }

    &Start {
      justify-content: flex-start;
    }

    &Center {
      justify-content: center;
    }

    &End {
      justify-content: flex-end;
    }
  }
}

// Nav states
.Nav {
  @media (max-width: 768px) {
    &Front {
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;

      &Start, &End {
      }

      &Start {
        justify-content: center;

        height: $nav-height;

        transition: background-color 150ms $global-cubic-bezier;

        &:hover {
          background-color: rgba(0, 0, 0, .1);
        }
      }

      &End {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        height: 0;
        width: 100%;

        .NavLink {
          height: $nav-height;
        }
      }
    }

    &.expanded {
      height: auto;

      .NavFront {
        &Start, &End {
        }

        &Start {
        }

        &End {
          display: flex;

          min-height: $nav-height;
          height: auto;
        }
      }
    }
  }
}
</style>
