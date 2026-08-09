<template>
  <div
    ref="card"
    class="tilt-card glass glass-hover neon-border group relative flex flex-col overflow-hidden rounded-2xl p-8"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="glowStyle"
    ></div>
    <NuxtLink
      :to="url"
      target="_blank"
      :aria-label="title"
      class="relative flex h-full flex-col"
    >
      <div class="flex items-center justify-between">
        <span
          class="text-lg font-semibold text-white transition group-hover:text-cyan-300"
          >{{ title }}</span
        >
        <div
          class="glass rounded-xl p-2.5 transition duration-300 group-hover:scale-110"
        >
          <Icon :name="icon" class="h-8 w-8" />
        </div>
      </div>
      <p class="mt-6 text-sm font-light leading-relaxed text-slate-400">
        <slot />
      </p>
      <span
        class="mt-auto inline-flex items-center pt-6 font-mono text-xs uppercase tracking-widest text-cyan-400/70 transition group-hover:text-cyan-300"
      >
        launch
        <Icon
          name="uil:arrow-up-right"
          class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  url: string
  icon: string
}>()

const card = ref<HTMLElement>()
const glowStyle = ref({})

const onMove = (e: MouseEvent) => {
  const el = card.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const rx = ((y - rect.height / 2) / rect.height) * -8
  const ry = ((x - rect.width / 2) / rect.width) * 8
  el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`
  glowStyle.value = {
    background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(34,211,238,0.12), transparent 60%)`,
  }
}

const onLeave = () => {
  const el = card.value
  if (el) el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
}
</script>
