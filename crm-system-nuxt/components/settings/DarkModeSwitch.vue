<template>
  <div>
    <Button @click="darkMode.toggleDarkMode">{{ $t("change-theme") }}</Button>
  </div>
</template>

<script lang="ts" setup>
const darkMode = useDarkMode();

</script>

<style></style>
