<script lang="ts" setup>
const store = useDealSlideStore();

const isLocalOpen = computed({
  get: () => store.isOpen,
  set: (value) => (store.isOpen = value),
});

const emit = defineEmits(['deleteDeal']);

const handleDelete = () => {
  emit('deleteDeal');
};

</script>

<template>
  <div>
    <USlideover v-model="isLocalOpen">
      <UCard
        class="flex flex-col flex-1 overflow-y-auto"
        :ui="{
          body: {
            base: 'flex-1',
          },
          ring: '',
          divide: 'divide-border divide-y',
        }"
      >
        <template #header>
          <KanbanSlideoverTop @delete-deal="handleDelete()" />
        </template>
        <KanbanSlideoverComments />
      </UCard>
    </USlideover>
  </div>
</template>
