<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
</script>

<template>
  <Navbar />
  <main class="flex min-h-screen flex-col">
    <Hero />
    <About />
    <Experience />
  </main>
  <footer class="border-t border-line py-8 text-center text-sm text-soft">
    © {{ new Date().getFullYear() }} Larbi Belkhit · Built & designed by Larbi Belkhit
  </footer>
</template>
