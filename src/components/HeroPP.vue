<!-- HeroComponent.vue -->
<template>
  <section>
    <!-- Main Content -->
    <main class="max-w-[1440px] max-h-[610px] mx[108px] pt-[315px]">
      <!-- Hero section -->
      <div class="grid grid-rows-2 items-center gap-8">
        <div class="flex flex-col">
          <div class="w-[1124.5px] h-[273px] justify-center">
            <h1 class="text-[128px] font-primary font-semibold text-[#333333] text-center">Portfolio</h1>
          </div>
          <div class="flex items-center justify-center w-[1124.5px] mt-[54px] gap-[60px]">
            <div class="w-[400px] h-[4px] bg-[#DBC1AC]"></div>
            <span class="ml-4 text-[24px] font-secondary text-[#333333]">2023-2024</span>
            <div class="w-[400px] h-[4px] bg-[#DBC1AC]"></div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>

<style scoped>
/* Your custom styles here */
</style>
