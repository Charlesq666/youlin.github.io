<script setup lang="ts">
import type { Entry } from '~/data/resume'

defineProps<{ entry: Entry }>()
</script>

<template>
  <article>
    <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <h3 class="font-semibold text-highlighted">
          {{ entry.title }}
        </h3>
        <p class="text-muted">
          {{ entry.organization }}
        </p>
      </div>
      <p class="shrink-0 text-sm text-muted">
        {{ entry.start }} – {{ entry.end }}<template v-if="entry.location">
          · {{ entry.location }}
        </template>
      </p>
    </div>
    <ul
      v-if="entry.highlights.length"
      class="mt-3 list-disc space-y-1.5 pl-5 text-toned marker:text-dimmed"
    >
      <li
        v-for="item in entry.highlights"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </article>
</template>
