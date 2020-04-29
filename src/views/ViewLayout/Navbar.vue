<template>
  <div class="topnav">
    <div class="container">
      <router-link v-bind:class="{ active: activeRoute === 'Publication' }" :to="{ name: 'Publication' }" href="#home">
        Publications
      </router-link>
      <router-link v-bind:class="{ active: activeRoute === 'Summary' }" :to="{ name: 'Summary' }" href="#home">
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

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  transition: all 0.5s;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #ff305c;
  color: white;
}
</style>
