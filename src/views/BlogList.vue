<script setup lang="ts">
import { getAllPosts } from '@/lib/blog'

const posts = getAllPosts()

function formatDate(date: string): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <main class="min-h-screen pt-32 pb-24">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <p class="text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-4">
        Blog
      </p>
      <h1 class="text-3xl md:text-5xl font-light tracking-tight mb-12">
        Writing
      </h1>

      <ul v-if="posts.length" class="flex flex-col gap-2">
        <li v-for="post in posts" :key="post.slug">
          <RouterLink
            :to="`/blog/${post.slug}`"
            class="group flex items-baseline justify-between gap-6 py-4 border-b border-line hover:border-accent transition-colors duration-200"
          >
            <span class="flex items-baseline gap-3">
              <span class="text-soft select-none">&bull;</span>
              <span class="text-lg text-ink group-hover:text-accent transition-colors duration-200">
                {{ post.title }}
              </span>
            </span>
            <time v-if="post.date" :datetime="post.date" class="shrink-0 text-sm text-soft">
              {{ formatDate(post.date) }}
            </time>
          </RouterLink>
        </li>
      </ul>

      <p v-else class="text-muted">
        No posts yet — check back soon.
      </p>
    </div>
  </main>
</template>
