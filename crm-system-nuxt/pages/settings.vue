<template>
  <div>
    <h1 class="text-2xl mb-10">
      {{ $t("settings-title") }}
    </h1>
    <div class="flex flex-col gap-3">
      <SettingsLabel label="change-language">
        <SettingsChangeLanguage />
      </SettingsLabel>
      <SettingsLabel label="change-theme">
        <SettingsDarkModeSwitch />
      </SettingsLabel>
      <SettingsLabel label="logout">
        <SettingsLogout />
      </SettingsLabel>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
