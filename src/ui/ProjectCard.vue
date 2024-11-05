<template>
    <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div class="aspect-video w-full overflow-hidden rounded-t-xl">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {{ tag }}
          </span>
        </div>
        <div class="flex gap-4">
          <a 
            :href="project.link" 
            target="_blank"
            class="btn btn-primary"
          >
            View Project
          </a>
          <a 
            :href="project.github" 
            target="_blank"
            class="btn bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    project: {
      title: string;
      description: string;
      image: string;
      tags: string[];
      link: string;
      github: string;
    }
  }>()
  </script>