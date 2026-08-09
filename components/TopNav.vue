<template>
  <header class="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
    <nav
      class="glass neon-border flex w-full max-w-5xl items-center rounded-2xl px-5 py-3"
    >
      <NuxtLink to="/" class="group flex items-center" @click="open = false">
        <span class="font-mono text-sm text-cyan-400">&lt;</span>
        <span
          class="mx-1 font-semibold tracking-wide text-white transition group-hover:text-cyan-300"
          >MRG</span
        >
        <span class="font-mono text-sm text-cyan-400">/&gt;</span>
      </NuxtLink>

      <ul class="ml-auto hidden items-center space-x-1 md:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :target="link.external ? '_blank' : undefined"
            class="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            active-class="!bg-cyan-400/10 !text-cyan-300 shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)]"
          >
            <span class="mr-1 font-mono text-cyan-400/60"
              >{{ link.index }}.</span
            >{{ link.label }}
          </NuxtLink>
        </li>
        <li
          class="!ml-4 flex items-center space-x-3 border-l border-white/10 pl-4"
        >
          <NuxtLink
            to="https://github.com/mrguamos"
            target="_blank"
            aria-label="Github"
            class="text-slate-300 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            <Icon name="uil:github" class="h-6 w-6"
          /></NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/mark-ryan-guamos/"
            target="_blank"
            aria-label="LinkedIn"
            class="text-slate-300 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            <Icon name="uil:linkedin" class="h-6 w-6"
          /></NuxtLink>
        </li>
      </ul>

      <button
        class="ml-auto rounded-xl p-1.5 text-cyan-300 md:hidden"
        aria-label="Menu"
        @click="open = !open"
      >
        <Icon
          :name="open ? 'material-symbols:close' : 'carbon:menu'"
          class="h-7 w-7"
        />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="open"
        class="glass neon-border absolute inset-x-4 top-20 rounded-2xl bg-panel/95 p-4 md:hidden"
      >
        <ul class="space-y-1">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              :target="link.external ? '_blank' : undefined"
              class="flex items-center rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              active-class="!bg-cyan-400/10 !text-cyan-300"
              @click="open = false"
            >
              <Icon :name="link.icon" class="mr-3 h-5 w-5" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div
          class="mt-3 flex items-center space-x-4 border-t border-white/10 px-4 pt-3"
        >
          <NuxtLink
            to="https://github.com/mrguamos"
            target="_blank"
            aria-label="Github"
            class="text-slate-300 hover:text-cyan-300"
          >
            <Icon name="uil:github" class="h-6 w-6"
          /></NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/mark-ryan-guamos/"
            target="_blank"
            aria-label="LinkedIn"
            class="text-slate-300 hover:text-cyan-300"
          >
            <Icon name="uil:linkedin" class="h-6 w-6"
          /></NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)

const links = [
  { to: '/', icon: 'uil:user', label: 'About', index: '01' },
  {
    to: '/projects',
    icon: 'fa6-solid:computer',
    label: 'Projects',
    index: '02',
  },
  {
    to: '/resume',
    icon: 'ri:file-paper-2-line',
    label: 'Resume',
    index: '03',
  },
]
</script>
