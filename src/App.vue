<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <footer class="border-t border-line py-8 text-center text-sm text-soft">
    © {{ new Date().getFullYear() }} Larbi Belkhit · Built & designed by Larbi Belkhit
  </footer>
</template>
