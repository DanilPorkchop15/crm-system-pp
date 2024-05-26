<script lang="ts" setup>
import type { ICard, IColumn } from "~/components/kanban/kanban.types"
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
useSeoMeta({
    title: "Home | CRM system"
})

const draggedCard = ref<ICard | null>(null)
const sourceColumn = ref<IColumn | null>(null)

const { data, isLoading, refetch } = useKanbanQuery();
</script>

<template>
  <div class="p-10">
    <h1 class="text-xl font-bold mb-10">
      CRM system by Danil Kostin
    </h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <Card draggable="true" class="mb-3">
        <CardHeader role="button">
          <CardTitle>
            CRM system
          </CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter>
          <CardDescription>
            CRM system for your business
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<style>

</style>