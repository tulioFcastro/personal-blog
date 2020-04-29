<template>
  <form class="search-container" @submit.prevent="$emit('searched', text)">
    <input type="text" placeholder="Author name" name="search" v-model="text" />
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style lang="scss" scoped>
$border: #a8a8a8;

.search-container {
  float: right;
}
input {
  max-width: 170px;
  padding: 6px;
  outline: none;
  font-size: 17px;
  border-right: none;
  border-left: 2px solid $border;
  border-top: 2px solid $border;
  border-bottom: 2px solid $border;
}
.search-container button {
  float: right;
  padding: 7px 10px;

  background: #ddd;
  font-size: 1rem;
  border-left: none;
  border-top: 2px solid $border;
  border-right: 2px solid $border;
  border-bottom: 2px solid $border;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}
button:focus {
  outline: none;
}
</style>
