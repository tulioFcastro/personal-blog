<template>
  <div class="content">
    <div class="circle" v-bind:class="{ selected: selected === 'grid' }" @click="select('grid')">
      <i class="icon fa fa-th-large"></i>
    </div>
    <div class="circle" v-bind:class="{ selected: selected === 'list' }" @click="select('list')">
      <i class="icon fa fa-bars"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'list',
      style: {
        grid: {
          div: {
            display: 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'space-between',
          },
          card: {
            flex: '1 0 230px;',
            width: '230px',
          },
        },
        list: {
          display: 'inline',
        },
      },
    };
  },
  methods: {
    select(type) {
      this.$emit('click', this.style[type]);
      this.selected = type;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.circle {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid #ced4da;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #ced4da;
    .icon {
      color: #333;
    }
  }
  &:last-child {
    margin-left: 0.25rem;
  }
}
.selected {
  background-color: #ced4da;
}
</style>
