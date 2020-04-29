<template>
  <div>
    <div v-if="isLoading.length > 0">
      <placeholder class="mb-2" v-for="val in [5, 6, 7, 8]" :key="val" />
    </div>
    <div v-else class="table">
      <input-search class="input-search" @searched="search" />
      <custom-table :filteredPublications="filteredPublications" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import CustomTable from './components/CustomTable';
import Placeholder from '@/components/Placeholder';
import InputSearch from '@/components/InputSearch';

export default {
  components: {
    CustomTable,
    InputSearch,
    Placeholder,
  },
  computed: {
    ...mapState('publication', {
      publications: state => state.items,
    }),
    ...mapState('author', {
      authors: state => state.items,
    }),
  },
  watch: {
    publications(newValue, oldValue) {
      this.filteredPublications = newValue;
    },
  },
  data() {
    return {
      isLoading: [],
      filteredPublications: null,
    };
  },
  methods: {
    ...mapActions('publication', ['getPublications']),
    ...mapActions('author', ['getAuthors']),
    ...mapGetters('author', ['getByName']),
    search(name) {
      const foundAuthors = this.authors
        .filter(author => author.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
        .map(author => author.id);
      const foundPub = [];
      this.publications.forEach(pub => {
        for (let i = 0; i < foundAuthors.length; i++) {
          if (pub.metadata.authorId === foundAuthors[i]) {
            foundPub.push(pub);
            break;
          }
        }
      });

      this.filteredPublications = foundPub;
    },
  },
  created() {
    if (this.publications.length === 0) {
      this.isLoading.push(true);
      this.isLoading.push(true);
      this.getPublications().finally(() => this.isLoading.pop());
      this.getAuthors().finally(() => this.isLoading.pop());
    } else this.filteredPublications = [...this.publications];
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  overflow: auto;
}
.input-search {
  margin-bottom: 1rem;
}
</style>
