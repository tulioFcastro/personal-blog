<template>
  <section>
    <div v-if="isLoading.length > 0">
      <placeholder class="mb-2" v-for="val in [1, 2, 3, 4]" :key="val" />
    </div>
    <div v-else>
      <display-options @clicked="changeStyle" />
      <div :style="style.div">
        <card class="mb-2" :style="style.card" v-for="(pub, index) in publications" :publication="pub" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Card from './components/Card';
import DisplayOptions from './components/DisplayOptions';
import Placeholder from '@/components/Placeholder';

export default {
  components: {
    Card,
    DisplayOptions,
    Placeholder,
  },
  computed: {
    ...mapState('publication', {
      publications: state => state.items,
    }),
  },
  data() {
    return {
      isLoading: [],
      style: {
        card: {},
        div: {},
      },
    };
  },
  methods: {
    ...mapActions('publication', ['getPublications']),
    ...mapActions('author', ['getAuthors']),
    changeStyle(style) {
      this.style.card = style.card;
      this.style.div = style.div;
    },
  },
  created() {
    if (this.publications.length === 0) {
      this.isLoading.push(true);
      this.isLoading.push(true);
      this.getPublications().finally(() => this.isLoading.pop());
      this.getAuthors().finally(() => this.isLoading.pop());
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables/_media_queries';

.mb-2 {
  margin-bottom: 0.5rem;
  @media only screen and (min-width: $screen-sm) {
    margin-bottom: 1.5rem;
  }
  @media only screen and (min-width: $screen-md) {
    margin-bottom: 2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
