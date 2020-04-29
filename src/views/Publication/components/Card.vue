<template>
  <div class="card">
    <h3>{{ publication.title }}</h3>
    <p>{{ publication.body }}</p>
    <footer class="footer">
      <span class="name">{{ getName(publication.metadata.authorId) }}</span>
      <span>
        {{ new Date(publication.metadata.publishedAt) | dateFormat('DD/MM/YYYY - HH:mm') }}
      </span>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    publication: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters('author', ['getName']),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables/_media_queries';

.card {
  padding: 1rem 0.5rem;
  border: 2px solid #ced4da;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.625rem rgba(38, 38, 38, 0.075);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .name {
    padding-bottom: 1rem;
    font-weight: bold;
  }
  @media only screen and (min-width: $screen-sm) {
    .name {
      padding-bottom: 0;
    }
    flex-direction: row-reverse;
  }
}
</style>
