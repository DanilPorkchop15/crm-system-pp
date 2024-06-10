<script lang="ts" setup>
import type {
  ICustomerFormState,
  InputFileEvent,
} from "../../../composables/editCustomer.types";
import { useMutation } from "@tanstack/vue-query";
import { storage } from "~/lib/appwrite";
import { STORAGE_ID } from "~/app.constants";
import { v5 as uuidv5 } from "uuid";

useSeoMeta({
  title: "Customer Edit | CRM system",
  description: "Customer edit page",
});

const { id } = useRoute().params;

const {
  handleSubmit,
  setValues,
  setFieldValue,
  values,
  defineField,
  resetForm,
} = useForm<ICustomerFormState>({});

const { data, isLoading, refetch, isSuccess } = useCustomerByIdQuery(
  id as string
);

const updateFormData = () => {
    const initialData = data.value as unknown as ICustomerFormState;
    setValues({
      name: initialData.name,
      email: initialData.email,
      "avatar-url": initialData["avatar-url"],
      "from-source": initialData["from-source"] || "",
    });
}

watch(isSuccess, () => {
  if (isSuccess.value) {
    updateFormData();
  }
});

const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [fromSource, fromSourceAttrs] = defineField("from-source");

const { mutate, isPending } = useCustomerMutation(
  data as unknown as ICustomerFormState,
  id as string
);

const onSubmit = handleSubmit((values) => {
  mutate(values);
});

const { mutate: uploadImage, isPending: isUploadPending } = useMutation({
  mutationKey: ["upload image"],
  mutationFn: (file: File) =>
    storage.createFile(STORAGE_ID, uuidv5(file.name, uuidv5.DNS), file),
  onSuccess: (data) => {
    const response = storage.getFileDownload(STORAGE_ID, data.$id);
    setFieldValue("avatar-url", response.href);
  },
});

const onFileChange = (event: InputFileEvent) => {
  event?.target?.files?.length && uploadImage(event.target.files[0]);
};

onMounted(() => {
  if (isSuccess.value) {
    updateFormData();
  }
});
onUnmounted(() => {
  resetForm();
});
</script>

<template>
  <div>
    <h1 class="font-bold text-2xl mb-10">Edit customer: {{ data?.name }}</h1>
    <div class="loading" v-if="isLoading">loading...</div>
    <form @submit.prevent="onSubmit" class="form" v-else>
      <Input
        v-model="name"
        v-bind="nameAttrs"
        placeholder="Name"
        type="text"
        class="input"
      />
      <Input
        v-model="email"
        v-bind="emailAttrs"
        placeholder="Email"
        type="email"
        class="input"
      />
      <Input
        v-model="fromSource"
        v-bind="fromSourceAttrs"
        placeholder="From source"
        type="text"
        class="input"
      />
      <img
        v-if="values['avatar-url'] || isUploadPending"
        :src="values['avatar-url']"
        class="w-20 h-20 rounded-full mb-3 "
      />
      <div class="grid w-full max-w-sm items center gap-1.5 input">
        <label>
          <div class="text-sm mb">{{$t("logo")}}</div>
          <Input
            type="file"
            @change="onFileChange($event)"
            :disabled="isUploadPending"
          />
        </label>
      </div>
      <Button
        type="submit"
        variant="outline"
        size="lg"
        :disabled="isPending || isUploadPending"
      >
        {{ isPending || isUploadPending ? $t("saving") : $t("save") }}
      </Button>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply mb-3;
}
</style>
