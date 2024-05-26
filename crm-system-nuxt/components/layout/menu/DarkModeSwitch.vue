<template>
  <div>
    <Button @click="darkMode.toggleDarkMode" size="sm" variant="outline">Switch theme</Button>
  </div>
</template>

<script lang="ts" setup>
const darkMode = useDarkMode();
onMounted(() => {
    if (darkMode.setupDarkMode) {
      darkMode.setupDarkMode();
    }
  }
)
</script>

<style></style>
