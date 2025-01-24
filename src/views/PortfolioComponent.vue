<template>
  <div>
    <HeroPP />
    <AboutComponent />
    <WorkExperienceComponent />
  </div>
</template>

<script>
import HeroPP from '@/components/HeroPP.vue';
import AboutComponent from '@/components/AboutComponent.vue'
import WorkExperienceComponent from '@/components/WorkExperienceComponent.vue'

export default {
  name: 'PortfolioPage',
  components: {
    HeroPP,
    AboutComponent,
    WorkExperienceComponent,
  },
}
</script>
