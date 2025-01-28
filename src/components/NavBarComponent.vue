<template>
  <header class="w-full fixed top-0 left-0 right-0 bg-[#DDB892] py-4 z-[1000]">
    <div class="w-[375px] md:max-w-screen-xl md:w-[1226px] mx-auto flex justify-between items-center px-4">
      <!-- Logo -->
      <div class="logo">
        <img 
          src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1734360506/image_44_yskvma.png" 
          alt="Portfolio Logo"
          class="h-8 w-auto"
        />
      </div>
      
      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <nav :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="hidden md:flex items-center space-x-8">
        <router-link 
          to="/" 
          class="text-[#333333] pb-[6px] px-[12px] py-[8px] rounded-[16px]" 
          active-class="border-b-2 border-[#FFFFFF] font-semibold" 
          exact
        >  
          Home
        </router-link>

        <router-link 
          to="/portfolio"
          class="text-[#333333] pb-[6px] px-[12px] py-[8px] rounded-[16px]" 
          active-class="border-b-2 border-[#FFFFFF] font-semibold" 
          exact
        >
          Portfolio
        </router-link>

        <a href="mailto:Susan.nkere02@gmail.com" 
          class="px-6 py-4 bg-[#000000] text-[#ffffff] rounded-full hover:bg-gradient-to-r hover:from-[#6C757D] hover:to-[#011228] transition-all"
        >
          Contact Me
        </a>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:hidden absolute top-16 left-0 w-[375px] bg-[#DDB892] flex flex-col items-center">
      <router-link 
        to="/" 
        class="text-[#333333] pb-[6px] px-[12px] py-[8px] rounded-[16px] w-full text-center" 
        active-class="border-b-2 border-[#FFFFFF] font-semibold" 
        @click="toggleMenu" 
        exact
      >  
        Home
      </router-link>

      <router-link 
        to="/portfolio"
        class="text-[#333333] pb-[6px] px-[12px] py-[8px] rounded-[16px] w-full text-center" 
        active-class="border-b-2 border-[#FFFFFF] font-semibold" 
        @click="toggleMenu" 
        exact
      >
        Portfolio
      </router-link>

      <a href="mailto:Susan.nkere02@gmail.com" 
        class="px-6 py-4 bg-[#000000] text-[#ffffff] rounded-full hover:bg-gradient-to-r hover:from-[#6C757D] hover:to-[#011228] transition-all w-full text-center"
        @click="toggleMenu"
      >
        Contact Me
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
nav {
  font-family: 'Poppins', serif;
  font-size: 16px;
  font-weight: light;
}
</style>
