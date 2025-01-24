<template>
    <div>
      <HeroComponent />
      <AboutComponent />
      <WorkExperienceComponent />
    </div>
  </template>
  
  <script>
  import HeroComponent from '@/components/HeroComponent.vue'
  import AboutComponent from '@/components/AboutComponent.vue'
  import WorkExperienceComponent from '@/components/WorkExperienceComponent.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeroComponent,
      AboutComponent,
      WorkExperienceComponent,
    },
  }
  </script>
  