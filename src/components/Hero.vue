<template>
  <section class="relative flex min-h-screen overflow-hidden" id="hero">
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at 75% 35%, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 60%)"
    />
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at 15% 85%, color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 50%)"
    />
    <div class="m-auto w-full max-w-5xl px-6 lg:px-8">
      <p class="text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-5">
        Principal Analyst, AI · London
      </p>
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
        Hi, I'm Larbi.
      </h1>
      <h2 class="text-2xl md:text-3xl font-light text-muted mt-6">
        I turn complex AI research into clear market insight.
      </h2>
      <p class="text-lg text-muted mt-6 max-w-2xl">
        I am a Principal Analyst at ABI Research, based in London, leading
        research on artificial intelligence across telecoms, cloud and
        enterprise technology — with a background in 5G, 6G & Open RAN
        networks, and a broader interest in data science and full-stack
        development.
      </p>
      <div class="flex items-center gap-6 mt-10">
        <a
          href="mailto:larbibelkhit@outlook.com"
          class="bg-accent hover:bg-accent-dark py-3 px-7 text-white text-base tracking-wide rounded-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block"
        >
          Get in touch
        </a>
        <a
          href="#about"
          class="text-base tracking-wide text-muted hover:text-ink transition-colors duration-200"
        >
          More about me ↓
        </a>
      </div>
    </div>
  </section>
</template>
