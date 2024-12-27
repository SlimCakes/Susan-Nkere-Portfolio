<!-- PortfolioSection.vue -->
<template>
  <div class="portfolio-container mx-auto px-4 max-w-7xl">
    <div class="years text-2xl text-gray-800 mb-12">2023-2024</div>
    
    <!-- Text Sections -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <!-- Independent Projects List -->
      <div class="section">
        <h2 class="section-title">
          <span class="text-gray-500">01.</span>
          <span class="text-2xl ml-2 font-serif">Independent UX/UI Designs</span>
        </h2>
        <ol class="mt-8 space-y-4">
          <li v-for="(project, index) in independentProjects" :key="project.id">
            {{ index + 1 }}. {{ project.title }}
          </li>
        </ol>
      </div>

      <!-- Collaborative Projects List -->
      <div class="section">
        <h2 class="section-title">
          <span class="text-gray-500">02.</span>
          <span class="text-2xl ml-2 font-serif">Collaborative UX/UI Designs</span>
        </h2>
        <ol class="mt-8 space-y-4">
          <li v-for="(project, index) in collaborativeProjects" :key="project.id">
            {{ index + 1 }}. {{ project.title }}
          </li>
        </ol>
      </div>
    </div>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Independent Projects Grid -->
      <div class="grid grid-cols-1 gap-6">
        <div v-for="project in independentProjects" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.title" class="w-full rounded-lg mb-4">
          <h3 class="text-xl font-serif mb-1">{{ project.title }}</h3>
          <p class="text-gray-600">{{ project.description }}</p>
        </div>
      </div>

      <!-- Collaborative Projects Grid -->
      <div class="grid grid-cols-1 gap-6">
        <div v-for="project in collaborativeProjects" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.title" class="w-full rounded-lg mb-4">
          <h3 class="text-xl font-serif mb-1">{{ project.title }}</h3>
          <p class="text-gray-600">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      independentProjects: [
        {
          id: 1,
          title: 'Traclet- Mobile application',
          description: 'Shortlet mobile application',
          image: '/path/to/traclet-mobile.jpg'
        },
        {
          id: 2,
          title: 'Traclet- Landing page',
          description: 'Shortlet landing page',
          image: '/path/to/traclet-landing.jpg'
        },
        {
          id: 3,
          title: 'Traclet- Admin dashboard',
          description: 'Shortlet admin dashboard',
          image: '/path/to/traclet-admin.jpg'
        },
        {
          id: 4,
          title: 'UBA mobile application redesign',
          description: 'UBA Mobile app redesign',
          image: '/path/to/uba-mobile.jpg'
        },
        {
          id: 5,
          title: '525System- company website',
          description: 'Company Website',
          image: '/path/to/525-system.jpg'
        }
      ],
      collaborativeProjects: [
        {
          id: 1,
          title: 'Dc Food Bank',
          description: 'Food bank website design',
          image: '/path/to/dc-foodbank.jpg'
        },
        {
          id: 2,
          title: 'Everest Crest High',
          description: 'School website design',
          image: '/path/to/everest-crest.jpg'
        },
        {
          id: 3,
          title: 'Weather for Two',
          description: 'Beddings website design',
          image: '/path/to/weather-two.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-container {
  font-family: system-ui, -apple-system, sans-serif;
}

.section-title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.project-card {
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card img {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

ol {
  list-style: none;
}

ol li {
  color: #4B5563;
  font-size: 1.125rem;
}
</style>