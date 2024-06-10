<script lang="ts" setup>
const textRef = ref("");
const emailRef = ref("");
const sending = ref(false);
const send = async () => {
  sending.value = true;
  await setTimeout(() => {
    textRef.value = "";
    emailRef.value = "";
    alert("Thank you for your feedback!");
    sending.value = false;
  }, 1000)
};
</script>

<template>
  <div>
    <h1 class="text-2xl mb-10">
      {{ $t("feedback-title") }}
    </h1>
    <div class="">
      <form @submit.prevent="send">
        <Input :placeholder="$t('email')" type="email" class="mb-3" v-model="emailRef" required/>
        <Textarea
          :placeholder="$t('feedback-text')"
          class="mb-3 w-full"
          v-model="textRef"
          required
        />
        <Button variant="outline" type="submit">
          {{ sending ? $t("sending") : $t("send") }}
        </Button>
      </form>
    </div>
  </div>
</template>

<style></style>
