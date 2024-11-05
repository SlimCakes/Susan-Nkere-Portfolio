<template>
    <section id="about" class="section bg-white">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-600">
              I'm a passionate frontend developer with expertise in Vue.js, HTML, CSS, and JavaScript. 
              My journey in web development started with a curiosity for creating beautiful, 
              interactive user experiences.
            </p>
            <p class="text-lg text-gray-600">
              Currently, I focus on building responsive, performant web applications 
              using modern technologies and best practices. I'm always eager to learn 
              new technologies and improve my skills.
            </p>
            <div class="flex gap-4">
              <a 
                href="#" 
                target="_blank" 
                class="btn btn-primary inline-flex items-center gap-2"
              >
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-2xl bg-gray-100 overflow-hidden">
              <img 
                src="/api/placeholder/500/500" 
                alt="Your Name" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>