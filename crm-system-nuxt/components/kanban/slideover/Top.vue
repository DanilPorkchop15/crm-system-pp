<script lang="ts" setup>
import dayjs from "dayjs";
const store = useDealSlideStore()
const { deleteDeal, isPendingDelete } = useDealDelete()

</script>

<template>
  <div class="border bg-muted rounded p-3">
    <div class="uppercase bolder text-3xl mb-4">Deal info</div>
    <KanbanSlideoverLabel label-text="Name">
      <h2 class="text-2xl">{{ store.card?.name }}</h2>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Price">
      {{ convertCurrency(store.card?.price || 0) }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Status">
      <Badge variant="outline" >{{ store.card?.status }}</Badge>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Customer">
      {{ store.card?.companyName }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Name">
      {{  dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
    </KanbanSlideoverLabel>
    <Button variant="destructive" class="w-full" :disabled="isPendingDelete" @click="store.card && deleteDeal(store.card.id)">
      <Icon name="radix-icons:trash" class="mr-3 text-xl" />
      {{ isPendingDelete ? 'Deleting...' : 'Delete deal' }}
    </Button>
  </div>
</template>

