<!-- PortfolioSection.vue -->
<template>
  <section class="max-w-[1440px]">
    <div class="flex items-center justify-start w-[1180px] mt-[328px] mb-[100px] gap-40">
      <h2 class="text-[32px] font-primary text-[#333333] w-[153px]">2023-2024</h2>
      <div class="w-[923px] h-[4px] bg-[#DBC1AC]"></div>
    </div>
    <!-- Main content grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 mb-[1200px]">
      <!-- Independent UX/UI Designs -->
      <div>
        <div class="relative w-[547px]">
          <!-- Vertical line -->
          <div class="absolute left-0 top-0 w-[3px] h-[198px] bg-[#DBC1AC]"></div>
          
          <div class="pl-12">
            <h3 class="w-[515px] text-[40px] text-[#333333] font-medium font-primary mb-[16px]">
              <span class="text-[40px] font-normal font-primary text-[#6C757D] mr-1">01.</span>
              Independent UX/UI Designs
            </h3>
            <ul class="space-y-6 text-[24px] text-[#333333] font-secondary">
              <li>1. Traclet- Mobile application</li>
              <li>2. Traclet- Landing page</li>
              <li>3. Traclet- Admin dashboard</li>
              <li>4. UBA mobile application redesign</li>
              <li>5. 525System- company website</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Collaborative UX/UI Designs -->
      <div>
        <div class="relative w-[544px]">
          <!-- Vertical line -->
          <div class="absolute left-0 top-0 w-[4px] h-[198px] bg-[#DBC1AC]"></div>
          
          <div class="pl-12">
            <h3 class="w-[515px] text-[40px] text-[#333333] font-medium font-primary mb-[16px]">
              <span class="text-[40px] font-normal font-primary text-[#6C757D] mr-1">02.</span>
              Collaborative UX/UI Designs
            </h3>
            <ul class="space-y-6 text-[24px] text-[#333333] font-secondary">
              <li>1. Dc Food Bank</li>
              <li>2. Everest Crest High</li>
              <li>3. Weather for Two</li>
            </ul>
          </div>
        </div>
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
  </section>
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