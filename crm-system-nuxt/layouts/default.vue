<script setup lang="ts">

</script>

<template>
<section class="grid" style="height: 100dvh">
  <LayoutSidebar/>
  <div>
    <slot/>
  </div>
</section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;

}
</style>