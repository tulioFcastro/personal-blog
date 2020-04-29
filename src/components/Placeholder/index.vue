<template>
  <div class="d-flex custom-div">
    <micro-component animated type="circle" width="36px" height="36px" class="mr-2" />
    <div class="w-100 d-flex flex-column">
      <micro-component animated width="25%" height="16px" class="mb-2" />
      <micro-component animated width="50%" height="12px" class="mb-2" />
      <micro-component animated width="75%" height="12px" class="mb-2" />
      <micro-component animated width="100%" height="12px" class="mb-2" />
    </div>
  </div>
</template>

<script>
import MicroComponent from './MicroComponent';

export default {
  components: {
    MicroComponent,
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
}
.w-100 {
  width: 100%;
}
.flex-column {
  flex-direction: column;
}
.mr-2 {
  margin-right: 0.5rem !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}

.custom-div {
  padding: 1rem 0.5rem;
  border: 2px solid #ced4da;
  border-radius: 0.2rem !important;
  box-shadow: 0 0 0.625rem rgba(38, 38, 38, 0.075);
}
</style>
