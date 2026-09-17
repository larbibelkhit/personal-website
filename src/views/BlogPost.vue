<script setup lang="ts">
import { computed } from 'vue'
import { getPostBySlug } from '@/lib/blog'

const props = defineProps<{ slug: string }>()

const post = computed(() => getPostBySlug(props.slug))

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
    <div v-if="post" class="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-16">
      <aside class="md:w-56 shrink-0">
        <nav class="md:sticky md:top-32 flex flex-col gap-1 border-l border-line pl-4">
          <p class="text-[0.7rem] tracking-[0.35em] uppercase text-soft mb-2">
            On this page
          </p>
          <a
            v-for="entry in post.toc"
            :key="entry.id"
            :href="`#${entry.id}`"
            :class="[
              'text-sm text-muted hover:text-accent transition-colors duration-200 py-0.5',
              entry.level === 3 ? 'pl-3' : '',
            ]"
          >
            {{ entry.text }}
          </a>
          <p v-if="!post.toc.length" class="text-sm text-soft">
            No sections
          </p>
        </nav>
      </aside>

      <article class="min-w-0 flex-1">
        <p class="text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-4">
          Blog
        </p>
        <h1 class="text-3xl md:text-5xl font-light tracking-tight mb-3">
          {{ post.title }}
        </h1>
        <time v-if="post.date" :datetime="post.date" class="text-sm text-soft">
          {{ formatDate(post.date) }}
        </time>

        <div class="prose prose-blog max-w-none mt-10" v-html="post.html" />
      </article>
    </div>

    <div v-else class="mx-auto max-w-3xl px-6 lg:px-8 text-center">
      <h1 class="text-3xl font-light tracking-tight mb-4">
        Post not found
      </h1>
      <RouterLink to="/blog" class="text-accent hover:underline">
        &larr; Back to all posts
      </RouterLink>
    </div>
  </main>
</template>
