<script lang="ts" setup>
import dayjs from "dayjs";
import type { IDeal } from "~/types/deals.types";
import { useCommentCreate } from "./useCommentCreate";
import { useCommentsQuery } from "./useCommentsQuery";

const { data, refetch, isLoading } = useCommentsQuery();
const { commentRef, writeComment, isPending } = useCommentCreate({ refetch });

const card = data as unknown as IDeal;
</script>

<template>
  <div>
    <Input
      :placeholder="$t('comment - write')"
      v-model="commentRef"
      type="text"
      class="input mb-1"
      @keyup.enter="writeComment"
    />
    <Button
      variant="outline"
      type="submit"
      class="w-full"
      :disabled="isLoading"
      @click="writeComment"
    >
      {{ isPending ? $t("saving") : $t("save") }}
    </Button>
    <Skeleton v-if="isLoading" class="w-full, h-[76px] rounded mt-5" />
    <div v-else-if="card">
      <div
        class="flex items-start mt-5"
        v-for="comment in card?.comments"
        :key="comment.$id"
      >
        <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1" size="20" />
        <div class="border bg-muted rounded p-3 w-full">
          <div class="mb-2 text-sm">
            {{ $t("comment-from") }}
            {{ dayjs(comment.$createdAt).format("HH:mm, DD MMM") }}
          </div>
          <p>{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
