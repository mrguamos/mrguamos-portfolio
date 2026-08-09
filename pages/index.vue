<template>
  <div class="mx-auto mb-16 flex w-full max-w-6xl flex-col px-6">
    <section
      class="relative flex min-h-[70vh] flex-col-reverse items-center justify-center gap-12 py-16 lg:flex-row lg:justify-between"
    >
      <div class="flex max-w-2xl flex-col text-center lg:text-left">
        <span
          v-reveal
          class="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
          >&gt; initializing profile_</span
        >
        <h1
          v-reveal="100"
          class="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Mark Ryan
          <span class="gradient-text">Guamos</span>
        </h1>
        <div
          v-reveal="200"
          class="mt-6 flex items-center justify-center font-mono text-lg text-slate-300 md:text-2xl lg:justify-start"
        >
          <span class="mr-3 text-cyan-400">$</span>
          <span>{{ typed }}</span>
          <span
            class="ml-1 inline-block h-6 w-3 bg-cyan-400 animate-blink"
          ></span>
        </div>
        <p
          v-reveal="300"
          class="mt-8 font-light leading-relaxed text-slate-400"
        >
          A software engineer with 10+ years of experience in fullstack
          development for complex, scalable web apps. Want to know how I can
          help with your project?
        </p>
        <div
          v-reveal="400"
          class="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
        >
          <NuxtLink
            href="/Resume-Mark-Ryan-Guamos.pdf"
            target="_blank"
            class="neon-border group inline-flex items-center rounded-xl bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/20 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]"
          >
            Download Resume
            <Icon
              name="grommet-icons:document-pdf"
              class="ml-2 h-5 w-5 transition-transform group-hover:scale-110"
            />
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="glass glass-hover inline-flex items-center rounded-xl px-6 py-3 font-medium text-slate-300 hover:text-white"
          >
            Explore Projects
          </NuxtLink>
        </div>
      </div>

      <div v-reveal="200" class="group relative shrink-0 animate-float">
        <div
          class="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-50 blur-lg transition duration-500 group-hover:opacity-90"
        ></div>
        <div
          class="absolute -inset-5 rounded-full border border-dashed border-cyan-400/30 animate-spin-slow"
        ></div>
        <NuxtImg
          quality="80"
          preload
          src="avatar.webp"
          class="relative rounded-full border-2 border-white/20"
          width="230"
          height="230"
          alt="avatar"
        />
      </div>
    </section>

    <section class="mt-4">
      <div v-reveal class="flex items-center">
        <h2 class="text-3xl font-bold text-white">
          <span class="gradient-text">//</span> Skills
        </h2>
        <div
          class="ml-6 h-px grow bg-gradient-to-r from-cyan-400/40 to-transparent"
        ></div>
      </div>

      <div class="mt-10 space-y-10">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          v-reveal="index * 100"
        >
          <span
            class="font-mono text-xs uppercase tracking-[0.35em] text-cyan-400/80"
            >{{ category.name }}</span
          >
          <div class="mt-4 flex flex-wrap gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="glass glass-hover flex items-center space-x-2.5 rounded-xl px-4 py-2.5"
            >
              <NuxtImg
                v-if="skill.image"
                format="webp"
                quality="80"
                loading="lazy"
                :src="skill.image"
                width="20"
                height="20"
                :alt="skill.name"
              />
              <Icon v-else :name="skill.icon" class="h-5 w-5 rounded-sm" />
              <span class="text-sm font-medium text-slate-200">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type SkillChip = {
  name: string
  icon?: string
  image?: string
}

type Category = {
  name: string
  skills: SkillChip[]
}

const categories: Category[] = [
  {
    name: 'Backend',
    skills: [
      { name: 'Java', icon: 'logos:java' },
      { name: 'Spring Boot', icon: 'logos:spring-icon' },
      { name: 'SQL', icon: 'logos:postgresql' },
      { name: 'JPA', icon: 'mdi:database-sync' },
      { name: 'Hibernate', icon: 'logos:hibernate' },
      { name: 'MyBatis', image: 'mybatis.png' },
      { name: 'NATS', icon: 'simple-icons:natsdotio' },
      { name: 'Pub/Sub', icon: 'mdi:message-processing' },
      { name: 'Message Queue', icon: 'mdi:tray-full' },
      { name: 'WebSocket', icon: 'mdi:transit-connection-variant' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Vue', icon: 'logos:vue' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
      { name: 'HTML5', icon: 'logos:html-5' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'CI/CD', icon: 'mdi:infinity' },
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'Terraform', icon: 'logos:terraform-icon' },
      { name: 'ArgoCD', icon: 'devicon:argocd' },
      { name: 'Selenium', icon: 'logos:selenium' },
      { name: 'Playwright', icon: 'devicon:playwright' },
    ],
  },
  {
    name: 'Others',
    skills: [
      { name: 'Blockchain', icon: 'mdi:link-variant' },
      { name: 'Solidity', icon: 'logos:solidity' },
      { name: 'Web3', icon: 'logos:web3js' },
      { name: 'Generative AI', icon: 'mdi:robot-outline' },
    ],
  },
]

const phrases = [
  'Senior Software Engineer',
  'Fullstack Developer',
  'Cloud & DevOps Enthusiast',
  'Blockchain Explorer',
]

const typed = ref('')
let phraseIndex = 0
let charIndex = 0
let deleting = false
let timer: ReturnType<typeof setTimeout>

const type = () => {
  const current = phrases[phraseIndex]
  if (!deleting) {
    charIndex++
    typed.value = current.slice(0, charIndex)
    if (charIndex === current.length) {
      deleting = true
      timer = setTimeout(type, 2000)
      return
    }
    timer = setTimeout(type, 70)
  } else {
    charIndex--
    typed.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
    }
    timer = setTimeout(type, 35)
  }
}

onMounted(() => {
  timer = setTimeout(type, 400)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})
</script>
