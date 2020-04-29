<template>
  <section>
    <div v-if="isLoading">
      <placeholder class="mb-2" v-for="val in [1, 2, 3, 4]" :key="val" />
    </div>
    <card v-else class="mb-2" v-for="(pub, index) in publications" :publication="pub" :key="index" />
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Card from './components/Card';
import Placeholder from '@/components/Placeholder';

export default {
  components: {
    Card,
    Placeholder,
  },
  computed: {
    ...mapState('publication', {
      publications: state => state.items,
    }),
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions('publication', ['getPublications']),
    ...mapActions('author', ['getAuthors']),
  },
  created() {
    if (this.publications.length === 0) {
      this.isLoading = true;
      this.getPublications().finally(() => (this.isLoading = false));
      this.getAuthors().finally(() => (this.isLoading = false));
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
