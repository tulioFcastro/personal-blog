<template>
  <table>
    <tr>
      <th class="th-cursor" @click="sortByTitle">
        Title
        <span style="float:right;"><i :class="`fa fa-${titleIcon}`"></i></span>
      </th>
      <th>Author</th>
      <th class="th-cursor" @click="sortByDate">
        Date
        <span style="float:right;"><i :class="`fa fa-${dateIcon}`"></i></span>
      </th>
    </tr>
    <tr v-for="(pub, index) in filteredPublications" :key="index">
      <td>{{ pub.title }}</td>
      <td>{{ getName(pub.metadata.authorId) }}</td>
      <td>{{ new Date(pub.metadata.publishedAt) | dateFormat('DD/MM/YYYY - HH:mm') }}</td>
    </tr>
  </table>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SortHelper from '@/helpers/sortHelper';

export default {
  props: {
    filteredPublications: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters('author', ['getName']),
    titleIcon() {
      return this.sort.title === 'asc' ? 'sort-up' : 'sort-down';
    },
    dateIcon() {
      return this.sort.date === 'asc' ? 'sort-up' : 'sort-down';
    },
  },
  data() {
    return {
      sortedObject: [],
      sort: {
        date: 'asc',
        title: 'asc',
      },
    };
  },
  methods: {
    sortByTitle() {
      if (this.sort.title === 'asc') {
        this.sort.title = 'desc';
        this.filteredPublications = this.filteredPublications.sort(SortHelper.sortAsc);
      } else {
        this.sort.title = 'asc';
        this.filteredPublications = this.filteredPublications.sort(SortHelper.sortDesc);
      }
    },
    sortByDate() {
      if (this.sort.date === 'asc') {
        this.sort.date = 'desc';
        this.filteredPublications = this.filteredPublications.sort(SortHelper.sortDateAsc);
      } else {
        this.sort.date = 'asc';
        this.filteredPublications = this.filteredPublications.sort(SortHelper.sortDateDesc);
      }
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  border: 2px solid #ced4da;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 1rem;
}

.th-cursor {
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
