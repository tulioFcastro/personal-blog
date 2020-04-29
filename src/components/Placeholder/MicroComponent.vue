<template>
  <section class="placeholder">
    <template v-if="type === 'bar'">
      <section
        class="d-flex bg-light placeholder-bar rounded-sm"
        :class="{ animate: animated }"
        :style="buildStyle()"
      ></section>
    </template>
    <template v-if="type === 'circle'">
      <section
        class="d-flex bg-light placeholder-bar rounded-circle"
        :class="{ animate: animated }"
        :style="buildStyle()"
      ></section>
    </template>
  </section>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    type: {
      type: String,
      default: 'bar',
    },
    width: String,
    height: String,
    animated: Boolean,
  },
  methods: {
    buildStyle() {
      return {
        width: this.width ? this.width : '100%',
        height: this.height ? this.height : `${20 / 16}rem`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables/_colors.scss';

.placeholder {
  .placeholder-bar {
    &.animate {
      animation: pulse 1s infinite ease-in-out;
    }
  }
}
.rounded-sm {
  border-radius: 0.2rem !important;
}
.rounded-circle {
  border-radius: 50% !important;
}

@keyframes pulse {
  0% {
    background-color: rgba($gray-66, 0.1);
  }
  50% {
    background-color: rgba($gray-66, 0.3);
  }
  100% {
    background-color: rgba($gray-66, 0.1);
  }
}
</style>
