<template>
  <div class="mx-auto mb-16 flex w-full max-w-5xl flex-col px-6">
    <section class="pt-16 pb-4">
      <span
        v-reveal
        class="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
        >&gt; decrypting file_</span
      >
      <h1 v-reveal="100" class="mt-4 text-5xl font-bold text-white md:text-6xl">
        <span class="gradient-text">//</span> Resume
      </h1>
      <p
        v-reveal="200"
        class="mt-6 max-w-3xl font-light leading-relaxed text-slate-400"
      >
        {{ resume.basics?.summary }}
      </p>

      <div v-reveal="300" class="mt-6 flex flex-wrap gap-3">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          :target="contact.href.startsWith('http') ? '_blank' : undefined"
          class="glass glass-hover flex items-center space-x-2 rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-cyan-300"
        >
          <Icon :name="contact.icon" class="h-4 w-4" />
          <span>{{ contact.label }}</span>
        </a>
      </div>

      <div v-reveal="400" class="mt-8">
        <NuxtLink
          href="/Resume-Mark-Ryan-Guamos.pdf"
          target="_blank"
          class="neon-border group inline-flex items-center rounded-xl bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/20 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]"
        >
          Download PDF
          <Icon
            name="grommet-icons:document-pdf"
            class="ml-2 h-5 w-5 transition-transform group-hover:scale-110"
          />
        </NuxtLink>
      </div>
    </section>

    <section class="mt-14">
      <div v-reveal class="flex items-center">
        <h2 class="text-3xl font-bold text-white">
          <span class="gradient-text">//</span> Experience
        </h2>
        <div
          class="ml-6 h-px grow bg-gradient-to-r from-cyan-400/40 to-transparent"
        ></div>
      </div>

      <ol class="relative mt-10 space-y-8 border-l border-cyan-400/20 pl-8">
        <li v-for="(job, index) in resume.work" :key="job.name + job.startDate">
          <span
            class="absolute -left-[7px] mt-7 h-3.5 w-3.5 rounded-full border border-cyan-300/60 bg-void shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          >
            <span class="absolute inset-1 rounded-full bg-cyan-300"></span>
          </span>
          <div v-reveal="index * 80" class="glass glass-hover rounded-2xl p-6">
            <div
              class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between"
            >
              <div>
                <span class="text-lg font-semibold text-white">{{
                  job.position
                }}</span>
                <span class="text-slate-400"> @ </span>
                <component
                  :is="job.url ? 'a' : 'span'"
                  :href="job.url"
                  :target="job.url ? '_blank' : undefined"
                  class="font-medium text-cyan-300"
                  :class="{ 'hover:underline': job.url }"
                  >{{ job.name }}</component
                >
              </div>
              <div class="shrink-0 font-mono text-xs text-slate-400">
                {{ formatRange(job.startDate, job.endDate) }}
                <span v-if="job.location" class="text-slate-500">
                  · {{ job.location }}</span
                >
              </div>
            </div>
            <p
              v-if="job.summary"
              class="mt-3 text-sm font-light leading-relaxed text-slate-400"
            >
              {{ job.summary }}
            </p>
            <ul v-if="job.highlights?.length" class="mt-4 space-y-1.5">
              <li
                v-for="highlight in job.highlights"
                :key="highlight"
                class="flex text-sm font-light text-slate-300"
              >
                <span class="mr-2 text-cyan-400">▹</span>{{ highlight }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </section>

    <section class="mt-16">
      <div v-reveal class="flex items-center">
        <h2 class="text-3xl font-bold text-white">
          <span class="gradient-text">//</span> Education
        </h2>
        <div
          class="ml-6 h-px grow bg-gradient-to-r from-cyan-400/40 to-transparent"
        ></div>
      </div>
      <div
        v-for="edu in resume.education"
        :key="edu.institution"
        v-reveal
        class="glass glass-hover mt-8 rounded-2xl p-6"
      >
        <div
          class="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between"
        >
          <div>
            <span class="text-lg font-semibold text-white">{{
              edu.studyType
            }}</span>
            <span class="text-slate-400"> in </span>
            <span class="font-medium text-cyan-300">{{ edu.area }}</span>
          </div>
          <span class="shrink-0 font-mono text-xs text-slate-400">{{
            formatRange(edu.startDate, edu.endDate)
          }}</span>
        </div>
        <p class="mt-2 text-sm font-light text-slate-400">
          {{ edu.institution }}
        </p>
      </div>
    </section>

    <section class="mt-16">
      <div v-reveal class="flex items-center">
        <h2 class="text-3xl font-bold text-white">
          <span class="gradient-text">//</span> Skills
        </h2>
        <div
          class="ml-6 h-px grow bg-gradient-to-r from-cyan-400/40 to-transparent"
        ></div>
      </div>
      <div class="mt-8 space-y-8">
        <div
          v-for="(group, index) in resume.skills"
          :key="group.name"
          v-reveal="index * 80"
        >
          <span
            class="font-mono text-xs uppercase tracking-[0.35em] text-cyan-400/80"
            >{{ group.name }}</span
          >
          <div class="mt-3 flex flex-wrap gap-2.5">
            <span
              v-for="keyword in group.keywords"
              :key="keyword"
              class="glass glass-hover rounded-xl px-4 py-2 text-sm font-medium text-slate-200"
              >{{ keyword }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <section v-if="interests.length" class="mt-16">
      <div v-reveal class="flex items-center">
        <h2 class="text-3xl font-bold text-white">
          <span class="gradient-text">//</span> Interests
        </h2>
        <div
          class="ml-6 h-px grow bg-gradient-to-r from-cyan-400/40 to-transparent"
        ></div>
      </div>
      <div v-reveal class="mt-8 flex flex-wrap gap-2.5">
        <span
          v-for="interest in interests"
          :key="interest"
          class="glass glass-hover rounded-xl px-4 py-2 text-sm font-medium text-slate-200"
          >{{ interest }}</span
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Resume } from '@jsonresume/types'
import resumeJson from '~~/public/resume.json'

const resume = resumeJson as Resume

const interests = (resume.interests ?? []).flatMap(
  (interest) => interest.keywords ?? []
)

const github = resume.basics?.profiles?.find(
  (profile) => profile.network?.toLowerCase() === 'github'
)
const linkedin = resume.basics?.profiles?.find(
  (profile) => profile.network?.toLowerCase() === 'linkedin'
)

const contacts = [
  {
    label: resume.basics?.email ?? '',
    href: `mailto:${resume.basics?.email}`,
    icon: 'uil:envelope',
  },
  {
    label: resume.basics?.phone ?? '',
    href: `tel:${resume.basics?.phone}`,
    icon: 'uil:phone',
  },
  {
    label: `${resume.basics?.location?.address}, ${resume.basics?.location?.countryCode}`,
    href: '#',
    icon: 'uil:map-marker',
  },
  ...(linkedin
    ? [{ label: 'LinkedIn', href: linkedin.url ?? '', icon: 'uil:linkedin' }]
    : []),
  ...(github
    ? [{ label: 'GitHub', href: github.url ?? '', icon: 'uil:github' }]
    : []),
].filter((contact) => contact.label)

const formatDate = (date?: string) => {
  if (!date) return 'Present'
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

const formatRange = (start?: string, end?: string) =>
  `${formatDate(start)} – ${formatDate(end)}`

useHead({
  title: 'Resume | Mark Ryan Guamos',
})
</script>
