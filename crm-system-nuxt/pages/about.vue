<template>
  <div>
    <h1 class="text-2xl mb-10">
      {{ $t("about-title") }}
    </h1>
    <div class="mb-10">
      <p class="mb-10 text-base text-justify">
        {{ $t("about-text") }}
      </p>
      <div class="links flex gap-6">
        <a href="https://t.me/porkchoppppppp" class="link">
          <Icon name="mdi:telegram" class="text-2xl" />
          <span href="https://t.me/hydra.ru">Telegram</span>
        </a>
        <a href="https://github.com/danilPorkchop15" class="link">
          <Icon name="mdi:github" class="text-2xl" />
          <span>Github</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply flex gap-3 transition-all hover:scale-105 p-3  w-min rounded-lg;
}
</style>
