<template>
  <div class="flex flex-col min-h-screen">
    <NavBarComponent class="w-full" />
    <main class="flex-1 mx-auto px-4">
      <router-view />
    </main>
    <footer class="w-[100vw] bg-[#DDB892] h-auto relative left-[41%] right-[50%] -mx-[50vw]">
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent,
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}
</style>
