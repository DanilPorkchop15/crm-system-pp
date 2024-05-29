<script lang="ts" setup>
import { useMutation } from "@tanstack/vue-query";
import { v5 as uuidv5 } from "uuid";
import { COLLECTIONS_DEALS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { IDeal } from "~/types/deals.types";

interface IDealFormState extends Pick<IDeal, "name" | "price"> {
  customers: {
    name: string;
    email: string;
  };
  status: string;
}

interface IProps {
  status: string;
  refetch: () => void;
}

const props = withDefaults(defineProps<IProps>(), {
  status: "",
});
const isOpenForm = ref(false);

const { handleSubmit, defineField, handleReset } = useForm<IDealFormState>({
  initialValues: {
    status: props.status,
  },
});

const [name, nameAttrs] = defineField("name");
const [price, priceAttrs] = defineField("price");
const [customerEmail, customerEmailAttrs] = defineField("customers.email");
const [customerName, customerNameAttrs] = defineField("customers.name");

const { mutate, isPending } = useMutation({
  mutationKey: ["create new deal"],
  mutationFn: (data: IDealFormState) =>
    DB.createDocument(
      DB_ID,
      COLLECTIONS_DEALS,
      uuidv5(data.name, uuidv5.DNS),
      data
    ),
  onSuccess: () => {
    props.refetch();
    handleReset();
  },
});

const onSubmit = handleSubmit((data) => {
  console.log(data);

  mutate(data);
});
</script>

<template>
  <div class="text-center mb-2">
    <button
      @click="isOpenForm = !isOpenForm"
      class="transition-all opacity-30 hover:opacity-60 text-muted-foreground hover:text-primaryCN"
    >
      <Icon
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
        size="30"
        v-if="isOpenForm"
      />
      <Icon name="gala:add" class="fade-in-100 fade-out-0" size="30" v-else />
    </button>
  </div>
  <form v-if="isOpenForm" @submit.prevent="onSubmit" class="form">
    <Input
      placeholder="Deal name"
      v-model="name"
      v-bind="nameAttrs"
      type="text"
      class="input"
      required
      autofocus
      tabindex="0"
    />
    <Input
      placeholder="Price"
      v-model="price"
      v-bind="priceAttrs"
      type="number"
      class="input"
      required
      min="0"
      max="1000000000"
    />
    <Input
      placeholder="Customer name"
      v-model="customerName"
      v-bind="customerNameAttrs"
      type="text"
      class="input"
      required
    />
    <Input
      placeholder="Customer email"
      v-model="customerEmail"
      v-bind="customerEmailAttrs"
      type="email"
      class="input"
      required
    />
    <Button
      variant="outline"
      type="submit"
      class="w-full"
      :disabled="isPending"
    >
      {{ isPending ? "Saving..." : "Save" }}
    </Button>
  </form>
</template>

<style scoped>
@keyframes dropdown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.form {
  @apply flex flex-col gap-3 p-6 rounded border mb-3;
  animation: dropdown 0.5s;
}
</style>
