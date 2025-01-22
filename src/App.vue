<!-- App.vue -->
<!-- App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <NavBarComponent class="w-full" />
      <main class="flex-1 mx-auto px-4">
        <HeroComponent />
        <AboutComponent />
        <WorkExperienceComponent />
        <PortfolioComponent />
      </main>
      <footer class="w-[100vw] bg-[#DDB892] h-[247px] relative left-[41%] right-[50%] -mx-[50vw]">
        <FooterComponent />
    </footer>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import WorkExperienceComponent from './components/WorkExperienceComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

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
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}
</style>