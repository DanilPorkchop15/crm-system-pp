import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB_ID, COLLECTIONS_COMMENTS } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { IComment } from "~/types/deals.types";
import { v5 as uuidv5 } from "uuid";

export function useCommentCreate({ refetch }: { refetch: () => void }) {
  const commentRef = ref<string>();
  const store = useDealSlideStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["add comments", commentRef.value],
    mutationFn: () =>
      DB.createDocument(
        DB_ID,
        COLLECTIONS_COMMENTS,
        uuidv5(commentRef.value as string, uuidv5.DNS),
        {
          text: commentRef?.value,
          deal: store.card?.id,
        }
      ),
    onSuccess: () => {
      refetch();
      commentRef.value = "";
    },
  });

  const writeComment = () => {
    if (!commentRef.value) return;
    mutate();
  };

  return { commentRef, writeComment, isPending };
}
