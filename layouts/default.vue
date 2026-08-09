<template>
  <div class="relative flex min-h-screen w-full flex-col bg-void">
    <AuroraBackdrop />
    <ClientOnly>
      <ParticleField />
    </ClientOnly>

    <TopNav />

    <main class="relative z-10 flex w-full grow flex-col pt-24">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
