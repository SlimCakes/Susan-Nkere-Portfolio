<template>
    <section id="projects" class="section bg-gray-50">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">My Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    github: string;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Vue.js and Tailwind CSS",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Tailwind CSS", "Pinia"],
      link: "#",
      github: "#"
    },
    // Add more projects here
  ]
  </script>