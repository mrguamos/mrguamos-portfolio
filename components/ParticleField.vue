<template>
  <canvas
    ref="canvas"
    class="pointer-events-none fixed inset-0 z-0 h-full w-full"
  />
</template>

<script setup lang="ts">
type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const canvas = ref<HTMLCanvasElement>()
let raf = 0
let particles: Particle[] = []
let mouse = { x: -9999, y: -9999 }

const onMouse = (e: MouseEvent) => {
  mouse = { x: e.clientX, y: e.clientY }
}

const resize = () => {
  const c = canvas.value
  if (!c) return
  c.width = window.innerWidth
  c.height = window.innerHeight
  const count = Math.min(110, Math.floor((c.width * c.height) / 16000))
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.6 + 0.4,
  }))
}

const tick = () => {
  const c = canvas.value
  const ctx = c?.getContext('2d')
  if (!c || !ctx) return
  ctx.clearRect(0, 0, c.width, c.height)

  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > c.width) p.vx *= -1
    if (p.y < 0 || p.y > c.height) p.vy *= -1

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(34, 211, 238, 0.55)'
    ctx.fill()
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i]
      const b = particles[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.hypot(dx, dy)
      if (dist < 120) {
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(167, 139, 250, ${0.18 * (1 - dist / 120)})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
    }
    const p = particles[i]
    const md = Math.hypot(p.x - mouse.x, p.y - mouse.y)
    if (md < 160) {
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(mouse.x, mouse.y)
      ctx.strokeStyle = `rgba(34, 211, 238, ${0.25 * (1 - md / 160)})`
      ctx.lineWidth = 0.8
      ctx.stroke()
    }
  }

  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouse)
  if (!reduced) raf = requestAnimationFrame(tick)
  else tick()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouse)
})
</script>
