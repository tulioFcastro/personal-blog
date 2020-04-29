<template>
  <div class="topnav">
    <div class="container">
      <router-link
        class="router-link"
        v-bind:class="{ active: activeRoute === 'Publication' }"
        :to="{ name: 'Publication' }"
      >
        Publications
      </router-link>
      <router-link class="router-link" v-bind:class="{ active: activeRoute === 'Summary' }" :to="{ name: 'Summary' }">
        Summary
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeRoute: this.$router.currentRoute.name,
    };
  },
  watch: {
    $route(to, from) {
      this.activeRoute = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
}

.topnav .router-link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  transition: all 0.5s;
}

.topnav .router-link:hover {
  background-color: #ddd;
  color: black;
}

.topnav .router-link.active {
  background-color: #ff305c;
  color: white;
}
</style>
