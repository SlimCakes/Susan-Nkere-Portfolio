<template>
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <router-link to="/" class="text-xl font-bold text-primary">
            Your Name
          </router-link>
          
          <!-- Mobile menu button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
  
          <!-- Desktop menu -->
          <div class="hidden md:flex space-x-8">
            <router-link v-for="item in menuItems" 
              :key="item.path" 
              :to="item.path"
              class="text-gray-600 hover:text-primary transition-colors"
              active-class="text-primary">
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu -->
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            active-class="text-primary">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' }
  ]
  </script>
  