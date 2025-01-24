<template>
    <header class="max-w-auto max-h-[146px] mx-auto fixed top-0 left-0 right-0 bg-[#DDB892] py-4 z-[1000]">
       <div class=" max-w-screen-xl w-[1226px] max-h-[76px] mx-auto flex justify-between items-center">
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

           <router-link 
             to="/contact" 
             class="px-6 py-4 bg-[#000000] text-[#ffffff] rounded-full hover:bg-gradient-to-r hover:from-[#6C757D] hover:to-[#011228] transition-all"
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
  font-family: 'Poppins', serif;
  font-size: 16px;
  font-weight:light;
}
   </style>
  
  