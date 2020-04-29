<template>
  <section class="page">
    <navbar />
    <div class="page-content container">
      <router-view class="custom-padding" />
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar';
export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/variables/_media_queries.scss';

.page {
  display: flex;
  height: 100%;

  &-content {
    height: 100%;
    flex-grow: 1;
  }
}
.page-content {
  overflow: auto;
  margin: 48px auto 0;
}
</style>
