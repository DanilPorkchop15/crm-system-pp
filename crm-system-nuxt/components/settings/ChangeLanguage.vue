<script lang="ts" setup>
const { availableLocales, locale } = useI18n();
const selectedLocale = ref(locale.value);
const setLocale = async () => {
  console.log(selectedLocale.value);
  await navigateTo((selectedLocale.value === "ru" ? "" : selectedLocale.value) + "/settings");
};

watch(selectedLocale, setLocale);
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
