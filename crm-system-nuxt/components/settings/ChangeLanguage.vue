<script lang="ts" setup>
const { availableLocales, locale } = useI18n();
const selectedLocale = ref(locale.value);

const setLocale = async () => {
  console.log(selectedLocale.value);
  locale.value = selectedLocale.value;
  await navigateTo("/settings");
};

watch(selectedLocale, () => {
  selectedLocale.value !== "" && setLocale();
});
</script>

<template>
  <div>
    <Select v-model="selectedLocale">
      <SelectTrigger>
        <SelectValue :placeholder="$t('settings-select-language')" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem v-for="loc in availableLocales" :key="loc" :value="loc">
            {{ $t(`languages.${loc}`) }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style></style>
