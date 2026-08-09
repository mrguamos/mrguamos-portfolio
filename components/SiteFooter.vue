<template>
  <footer class="relative z-10 mt-auto px-8 pb-8">
    <div
      class="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
    ></div>
    <div
      class="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row"
    >
      <span class="font-mono text-xs text-slate-500"
        >© {{ new Date().getFullYear() }} Mark Ryan Guamos</span
      >
      <span class="flex items-center space-x-3">
        <span
          class="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500"
          >powered by</span
        >
        <NuxtLink to="https://vercel.com/" target="_blank" aria-label="Vercel">
          <Icon
            name="logos:vercel-icon"
            class="h-5 w-5 opacity-70 transition hover:opacity-100"
        /></NuxtLink>
        <NuxtLink to="https://vuejs.org/" target="_blank" aria-label="Vue">
          <Icon
            name="logos:vue"
            class="h-5 w-5 opacity-70 transition hover:opacity-100"
        /></NuxtLink>
        <NuxtLink to="https://nuxt.com/" target="_blank" aria-label="Nuxt">
          <Icon
            name="logos:nuxt-icon"
            class="h-5 w-5 opacity-70 transition hover:opacity-100"
        /></NuxtLink>
      </span>
    </div>
  </footer>
</template>
