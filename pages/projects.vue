<template>
  <div class="mx-auto mb-16 flex w-full max-w-6xl flex-col px-6">
    <section class="pt-16 pb-6">
      <span
        v-reveal
        class="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400"
        >&gt; loading modules_</span
      >
      <h1 v-reveal="100" class="mt-4 text-5xl font-bold text-white md:text-6xl">
        <span class="gradient-text">//</span> Projects
      </h1>
      <p v-reveal="200" class="mt-4 max-w-xl font-light text-slate-400">
        A few things I built while exploring different stacks: blockchain, edge
        runtimes, CI pipelines, and frontend frameworks.
      </p>
    </section>

    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="(project, index) in projects"
        :key="project.url"
        v-reveal="(index % 3) * 120"
      >
        <ProjectCards
          :title="project.title"
          :url="project.url"
          :icon="project.icon"
          class="h-full"
          >{{ project.content }}</ProjectCards
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Project = {
  title: string
  url: string
  icon: string
  content: string
}

const projects: Project[] = [
  {
    title: 'DefiKnight',
    url: 'https://dk-website-mrguamos.vercel.app',
    icon: 'skill-icons:solidity',
    content: 'Play To Earn Fantasy Medieval Blockchain NFT GAME',
  },
  {
    title: 'TikTok Downloader',
    url: 'https://kotkit.mrqg.dev/',
    icon: 'logos:tiktok-icon',
    content: 'TikTok Downloader made with NextJS',
  },
  {
    title: 'M3 Jenkinsfile',
    url: 'https://github.com/mrguamos/jenkins-pipeline-maven-multi-module',
    icon: 'vscode-icons:file-type-jenkins',
    content:
      'Cross Platform Jenkins Multi Branch Pipeline for Maven Multi-Module Project',
  },
  {
    title: 'Nebula',
    url: 'https://nebula.mrqg.dev/',
    icon: 'cib:the-movie-database',
    content:
      'Movie app demo built using NextJS, React, TailwindCSS, The Movie Database API and TypeScript.',
  },
  {
    title: 'PokeNext',
    url: 'https://pokenext.mrqg.dev/',
    icon: 'arcticons:pokemon-unite',
    content: 'Pokemon Gallery powered by PokéAPI',
  },
  {
    title: 'Online Portfolio',
    url: 'https://resume.mrqg.dev/',
    icon: 'bytesize:portfolio',
    content: 'My Personal Website',
  },
]
</script>
