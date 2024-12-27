<template>
    <header class="fixed top-0 left-0 right-0 bg-[#DBC1AC] px-8 py-4 z-50">
       <div class="max-w-7xl mx-auto flex justify-between items-center">
         <!-- Logo -->
         <div class="logo">
           <img 
             src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1734360506/image_44_yskvma.png" 
             alt="Portfolio Logo"
             class="h-8 w-auto"
           />
         </div>
         
             <!-- Navigation -->
             <nav class="flex items-center space-x-8">
           <router-link to="/" class="text-black hover:opacity-70 transition-opacity">
             Home
           </router-link>
           <router-link to="/portfolio" class="text-black hover:opacity-70 transition-opacity">
             Portfolio
           </router-link>
           <router-link 
             to="/contact" 
             class="px-6 py-2 bg-black text-white rounded-full hover:bg-opacity-90 transition-all"
           >
             Contact Me
           </router-link>
         </nav>
       </div>
     </header>
   </template>
   
   <script>
   export default {
     name: 'NavBarComponent'
   }
   </script>
   
   <style scoped>
   nav {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: bold;
}
   </style>
  
  