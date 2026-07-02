<script setup lang="ts">
const jobs = [
  {
    id: 1,
    company: 'ABI Research',
    title: 'Principal Analyst - Artificial Intelligence',
    stint: 'June 2026 - Present',
    location: 'London Area, United Kingdom · Hybrid',
  },
  {
    id: 2,
    company: 'ABI Research',
    title: 'Senior Analyst - Artificial Intelligence',
    stint: 'October 2025 - June 2026',
    location: 'London Area, United Kingdom · Hybrid',
  },
  {
    id: 3,
    company: 'ABI Research',
    title: 'Industry Analyst - Telco AI',
    stint: 'May 2024 - October 2025',
    location: 'London Area, United Kingdom · Hybrid',
  },
  {
    id: 4,
    company: 'ABI Research',
    title: 'Research Analyst - Mobile Network Infrastructure',
    stint: 'June 2023 - May 2024',
    location: 'Greater London, England, United Kingdom · Hybrid',
  },
  {
    id: 5,
    company: 'ABI Research',
    title: 'Research Intern',
    stint: 'June 2021 - June 2023',
    location: 'Greater London, England, United Kingdom · Remote',
  },
]
</script>

<template>
  <section class="bg-ivory" id="experience">
    <div class="mx-auto max-w-5xl px-6 lg:px-8 py-24 md:py-32">
      <p class="text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-4">
        Career
      </p>
      <h2 class="text-3xl md:text-5xl font-light tracking-tight">
        Experience
      </h2>
      <ol class="mt-16 relative border-s border-line ms-3">
        <li v-for="job in jobs" :key="job.id" class="ms-8 pb-12 last:pb-0">
          <span class="absolute -start-[7px] mt-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-ivory" />
          <p class="text-sm text-soft">{{ job.stint }}</p>
          <p class="text-lg font-normal mt-1">{{ job.title }}</p>
          <p class="text-muted">{{ job.company }}</p>
          <p class="text-sm text-soft mt-0.5">{{ job.location }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
