<script setup lang="ts">
import { profile } from '~/data/resume'

const baseURL = useRuntimeConfig().app.baseURL

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: `${baseURL}favicon.ico` }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: profile.name,
  description: profile.summary,
  ogTitle: profile.name,
  ogDescription: profile.summary
})
</script>

<template>
  <UApp>
    <UHeader
      :title="profile.name"
      :toggle="false"
    >
      <template #right>
        <UColorModeButton />

        <UButton
          :to="profile.github"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} {{ profile.name }}
        </p>
      </template>

      <template #right>
        <UButton
          :to="`mailto:${profile.email}`"
          icon="i-lucide-mail"
          aria-label="Email"
          color="neutral"
          variant="ghost"
        />
        <UButton
          :to="profile.github"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
