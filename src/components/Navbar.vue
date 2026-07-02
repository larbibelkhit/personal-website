<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Logo from '@/components/Logo.vue'

const NAV_LINKS = [
  { href: '#hero', title: 'home' },
  { href: '#about', title: 'about' },
  { href: '#experience', title: 'experience' },
]

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/larbibelkhit/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://github.com/larbibelkhit/', label: 'GitHub', icon: 'github' },
  { href: 'mailto:larbibelkhit@outlook.com', label: 'Email', icon: 'mail' },
] as const

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4">
    <div
      :class="[
        'flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between w-full max-w-5xl px-5 py-3 rounded-sm border transition-all duration-500',
        scrolled
          ? 'bg-ivory/80 backdrop-blur-xl border-line shadow-lg shadow-ink/5'
          : 'bg-ivory/40 backdrop-blur-md border-transparent',
      ]"
    >
      <a href="#hero" class="flex items-center shrink-0 text-ink" aria-label="Home">
        <Logo class="h-6 w-auto" />
      </a>
      <ul class="hidden md:flex items-center gap-1 justify-self-center">
        <li v-for="link in NAV_LINKS" :key="link.title">
          <a
            :href="link.href"
            class="capitalize px-3.5 py-1.5 text-[0.85rem] tracking-wide text-muted hover:text-ink rounded-sm hover:bg-panel/70 transition-all duration-200"
          >
            {{ link.title }}
          </a>
        </li>
      </ul>
      <div class="flex items-center justify-end gap-4">
        <ul class="hidden md:flex items-center gap-4">
          <li v-for="social in SOCIAL_LINKS" :key="social.label">
            <a :href="social.href" :aria-label="social.label">
              <svg v-if="social.icon === 'linkedin'" class="w-5 h-5 text-muted hover:text-accent transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <svg v-else-if="social.icon === 'github'" class="w-5 h-5 text-muted hover:text-accent transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <svg v-else class="w-5 h-5 text-muted hover:text-accent transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 7 7.55 5.4a1.25 1.25 0 0 0 1.4 0L20.25 7"/></svg>
            </a>
          </li>
        </ul>
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label="Toggle menu"
        >
          <span
            :class="['block w-5 h-[1.5px] bg-muted transition-all duration-300 origin-center', menuOpen ? 'rotate-45 translate-y-[6.5px]' : '']"
          />
          <span
            :class="['block w-5 h-[1.5px] bg-muted transition-all duration-300', menuOpen ? 'opacity-0 scale-x-0' : '']"
          />
          <span
            :class="['block w-5 h-[1.5px] bg-muted transition-all duration-300 origin-center', menuOpen ? '-rotate-45 -translate-y-[6.5px]' : '']"
          />
        </button>
      </div>
    </div>
  </nav>
  <div
    :class="[
      'fixed inset-0 z-[99] bg-ivory/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden',
      menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
    ]"
  >
    <a
      v-for="link in NAV_LINKS"
      :key="link.title"
      :href="link.href"
      @click="menuOpen = false"
      class="capitalize text-2xl tracking-wide text-muted hover:text-accent transition-colors duration-200"
    >
      {{ link.title }}
    </a>
    <ul class="mt-4 flex items-center gap-8">
      <li v-for="social in SOCIAL_LINKS" :key="social.label">
        <a :href="social.href" :aria-label="social.label" @click="menuOpen = false">
          <svg v-if="social.icon === 'linkedin'" class="w-7 h-7 text-muted hover:text-accent transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <svg v-else-if="social.icon === 'github'" class="w-7 h-7 text-muted hover:text-accent transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          <svg v-else class="w-7 h-7 text-muted hover:text-accent transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 7 7.55 5.4a1.25 1.25 0 0 0 1.4 0L20.25 7"/></svg>
        </a>
      </li>
    </ul>
  </div>
</template>
