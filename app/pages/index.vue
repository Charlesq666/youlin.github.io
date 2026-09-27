<script setup lang="ts">
import { education, experience, profile, skills } from '~/data/resume'

const avatarSrc = `${useRuntimeConfig().app.baseURL}${profile.avatar}`
</script>

<template>
  <UContainer class="max-w-4xl py-12 sm:py-16">
    <header class="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center">
      <img
        :src="avatarSrc"
        :alt="profile.name"
        width="128"
        height="128"
        class="size-28 shrink-0 rounded-full object-cover ring-1 ring-default sm:size-32"
      >
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
          {{ profile.name }}
        </h1>
        <p class="mt-2 text-lg text-muted">
          {{ profile.headline }} · {{ profile.location }}
        </p>
        <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <ULink
            :to="`mailto:${profile.email}`"
            class="inline-flex items-center gap-1.5"
          >
            <UIcon name="i-lucide-mail" />{{ profile.email }}
          </ULink>
          <ULink
            :to="profile.github"
            target="_blank"
            class="inline-flex items-center gap-1.5"
          >
            <UIcon name="i-simple-icons-github" />{{ profile.github.replace('https://', '') }}
          </ULink>
          <ULink
            :to="profile.linkedin"
            target="_blank"
            class="inline-flex items-center gap-1.5"
          >
            <UIcon name="i-simple-icons-linkedin" />LinkedIn
          </ULink>
        </div>
      </div>
    </header>

    <section class="mb-12">
      <h2 class="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
        Experience
      </h2>
      <div class="space-y-10">
        <ResumeEntry
          v-for="job in experience"
          :key="job.organization"
          :entry="job"
        />
      </div>
    </section>

    <section class="mb-12">
      <h2 class="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
        Education
      </h2>
      <div class="space-y-6">
        <div
          v-for="school in education"
          :key="school.school"
          class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <div>
            <h3 class="font-semibold text-highlighted">
              {{ school.school }}
            </h3>
            <p class="text-muted">
              {{ school.degree }}
            </p>
          </div>
          <p class="shrink-0 text-sm text-muted">
            {{ school.start }} – {{ school.end }} · {{ school.location }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
        Skills
      </h2>
      <dl class="space-y-4">
        <div
          v-for="(items, group) in skills"
          :key="group"
          class="flex flex-col gap-2 sm:flex-row sm:gap-4"
        >
          <dt class="w-32 shrink-0 font-medium text-highlighted">
            {{ group }}
          </dt>
          <dd class="flex flex-wrap gap-2">
            <UBadge
              v-for="skill in items"
              :key="skill"
              :label="skill"
              color="neutral"
              variant="subtle"
            />
          </dd>
        </div>
      </dl>
    </section>
  </UContainer>
</template>
