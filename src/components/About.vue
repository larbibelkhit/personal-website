<script setup lang="ts">
const SKILLS = ['TypeScript', 'Python', 'Java', 'Vue', 'Pandas', 'HTML & CSS']
</script>

<template>
  <section class="bg-deep border-y border-line" id="about">
    <div class="mx-auto max-w-5xl px-6 lg:px-8 py-24 md:py-32 flex flex-col-reverse md:flex-row gap-12 md:gap-16">
      <div class="md:w-3/5">
        <p class="text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-4">
          About
        </p>
        <h2 class="text-3xl md:text-5xl font-light tracking-tight">
          A brief intro — who am I?
        </h2>
        <p class="text-lg text-muted mt-6">
          I am currently a Principal Analyst at ABI Research, leading the firm's Artificial Intelligence research — covering how AI is reshaping telecoms, cloud and enterprise technology. I previously spent time on ABI's 5G, 6G & Open RAN Networks team, and hold a Bachelor of Science with Honours in Computer Science from Queen Mary, University of London.
        </p>
        <p class="text-lg text-muted mt-5">
          When I am not working, I enjoy building websites from scratch, learning new technologies, playing chess, going to the gym and cooking new food from various cuisines.
        </p>
        <p class="text-lg text-muted mt-5">
          Here are some of the technologies I am currently working with:
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <span
            v-for="skill in SKILLS"
            :key="skill"
            class="px-4 py-2 text-sm tracking-wide border border-line rounded-sm bg-ivory text-muted"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      <div class="md:w-2/5 flex justify-center items-start">
        <img
          src="/larbi.JPG"
          alt="Larbi at his graduation"
          width="450"
          height="300"
          class="rounded-sm border border-line shadow-lg shadow-ink/5"
        />
      </div>
    </div>
  </section>
</template>
