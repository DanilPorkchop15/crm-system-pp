<script lang="ts" setup>
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import dayjs from "dayjs";
import { DB } from "~/lib/appwrite";
import { useMutation } from "@tanstack/vue-query";
import { DB_ID, COLLECTIONS_DEALS } from "~/app.constants";
import type { EnumStatus } from "~/types/deals.types";
import { generateColumnGradient } from "~/components/kanban/generateGradient";

type TypeMutationVariables = {
  docId: string;
  status?: EnumStatus;
};

useSeoMeta({
  title: "Home | CRM system",
});

const draggedCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);

const store = useDealSlideStore();

const { data, isLoading, refetch } = useKanbanQuery();

const { mutate } = useMutation({
  mutationKey: ["move card"],
  mutationFn: ({ docId, status }: TypeMutationVariables) =>
    DB.updateDocument(DB_ID, COLLECTIONS_DEALS, docId, {
      status,
    }),
  onSuccess: () => {
    refetch();
  },
});

const onDragStart = (event: DragEvent, card: ICard, column: IColumn) => {
  draggedCardRef.value = card;
  sourceColumnRef.value = column;
};

const onDragEnd = (event: DragEvent) => {
  draggedCardRef.value = null;
  sourceColumnRef.value = null;
};

const onDragOver = (event: DragEvent, column: IColumn) => {};

const onDrop = (targetColumn: IColumn) => {
  if (draggedCardRef.value && sourceColumnRef.value) {
    console.log(targetColumn);

    mutate({
      docId: draggedCardRef.value.id,
      status: targetColumn.id,
    });
  }
};
</script>

<template>
  <div class="p-10">
    <h1 class="text-xl font-bold mb-10">CRM system by Danil Kostin</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-12">
        <div
          class="min-h-[80vh]"
          v-for="(column, index) in data"
          :key="column.id"
          @dragover.prevent="onDragOver($event, column)"
          @drop.prevent="onDrop(column)"
        >
          <div
            class="rounded bg-secondary text-foreground py-1 px-5 mb-2 text-center"
            :style="generateColumnGradient(index, data?.length)"
          >
            {{ column.name }}
          </div>
          <div class="">
            <KanbanCreateDeal :status="column.id" :refetch="refetch" />
            <Card
              draggable="true"
              style="cursor: grab"
              @dragstart="onDragStart($event, card, column)"
              @dragend.prevent="onDragEnd($event)"
              v-for="card in column.items"
              :key="card.id"
              class="mb-3"
            >
              <CardHeader role="button" @click="store.set(card)">
                <CardTitle>
                  {{ card.name }}
                </CardTitle>
                <CardDescription>
                  {{ convertCurrency(card.price) }}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>Компания</div>
                {{ card.companyName }}
              </CardContent>
              <CardFooter>
                {{ dayjs(card.$createdAt).format("DD MMMM YYYY") }}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <KanbanSlideover/>
    </div>
  </div>
</template>

<style></style>
