<!-- FooterComponent.vue -->
<template>
  <footer class="bg-[#DBC1AC] py-20">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Large Name -->
      <h2 class="text-8xl font-playfair text-white mb-8">SUSAN NKERE</h2>
      
      <!-- Social Links -->
      <div class="flex space-x-6">
        <a 
          v-for="social in socials" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:opacity-80 transition-opacity flex items-center space-x-2"
        >
          <img :src="social.icon" :alt="social.name" class="icon w-6 h-6" />
          <span>{{ social.name }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
const icons = import.meta.glob('@/assets/icons/*.svg', { eager: true });

export default {
  name: 'FooterComponent',
  data() {
    return {
      socials: [
        {
          name: 'LinkedIn',
          url: '#',
          icon: icons['/assets/icons/u_linkedin.svg'], // Ensure the path matches
        },
        {
          name: 'Instagram',
          url: '#',
          icon: icons['/assets/icons/u_instagram-alt.svg'],
        },
        {
          name: 'Behance',
          url: '#',
          icon: icons['/assets/icons/u_behnace.svg'],
        },
      ],
    };
  },
};
</script>


<style scoped>
footer {
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
}

.icon {
  display: inline-block;
}
</style>