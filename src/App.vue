<!-- App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <NavBarComponent class="w-full" />
    <main class="flex-1 flex flex-col">
      <HeroComponent />
      <AboutComponent />
      <WorkExperienceComponent />
      <PortfolioComponent />
      <FooterComponent />
    </main>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import WorkExperienceComponent from './components/WorkExperienceComponent.vue'

export default {
  name: 'App',
  components: {
    HeroComponent,
    AboutComponent,
    WorkExperienceComponent,
    PortfolioComponent,
    NavBarComponent,
    FooterComponent,
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
}
</style>