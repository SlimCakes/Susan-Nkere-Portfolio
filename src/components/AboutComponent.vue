<template>
      <!-- About Section -->
      <section class="py-16 border-t border-gray-200">
        <h2 class="text-sm text-gray-600 mb-8">About Me</h2>
        
        <h3 class="text-4xl mb-8">Hello there!</h3>
        <div class="grid grid-cols-2 gap-16">
          <!-- Left Column: Text Content -->
          <div class="space-y-8">
            <p class="text-gray-700">
              I'm Susan, a UX/UI & product designer, from Nigeria. From mobile applications 
              to websites to personal portfolios, I specialise in building visually appealing 
              and user centered designs. I strive to develop key features such as empathy, 
              problem solving, creativity and visualization which i believe forms the 
              foundation of Design.
            </p>

            <!-- Skills and Software Grid -->
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h4 class="font-bold mb-4">Skills</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>UI/UX Design</li>
                  <li>Typography and Color Theory</li>
                  <li>Prototyping</li>
                  <li>Illustration Integration</li>
                  <li>Web Design Principles</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>CSS Techniques</li>
                  <li>Version Control (Git/GitHub)</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-4">Software</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>VScode</li>
                  <li>Node.js</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="relative">
            <div class="w-full aspect-square rounded-lg bg-[#DBC1AC] bg-opacity-20"></div>
            <img 
              src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1727260514/Headshot_1_zeqicq.jpg"
              alt="Profile"
              class="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <!-- Work Experience Section -->
      <section class="py-16 border-t border-gray-200">
        <div class="grid grid-cols-[2fr,1fr] gap-16">
          <div>
            <h3 class="text-2xl mb-8">Work Experience</h3>
            <div class="space-y-8">
              <div v-for="(job, index) in workExperience" :key="index">
                <div class="flex gap-8">
                  <div class="w-48">
                    <p class="text-sm text-gray-600">{{ job.period }}</p>
                    <p class="font-medium">{{ job.company }}</p>
                    <p class="text-sm text-gray-600">{{ job.role }}</p>
                  </div>
                  <ul class="list-disc space-y-2 ml-4">
                    <li v-for="(point, idx) in job.points" :key="idx">{{ point }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl mb-8">Education</h3>
            <div class="space-y-6">
              <div v-for="(edu, index) in education" :key="index">
                <p class="font-medium">{{ edu.school }}</p>
                <p class="text-sm text-gray-600">{{ edu.course }}</p>
                <p class="text-sm">{{ edu.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-16 border-t border-gray-200">
        <h3 class="text-2xl mb-4">Contact Me</h3>
        <div class="flex gap-4">
          <a href="#" class="text-gray-600 hover:text-black">LinkedIn</a>
          <a href="#" class="text-gray-600 hover:text-black">GitHub</a>
          <a href="#" class="text-gray-600 hover:text-black">Behance</a>
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      workExperience: [
        {
          period: 'May 2024 - Present',
          company: '525System • Calabar',
          role: 'UI/UX Designer, Coordinator',
          points: [
            'Conducted user research, developed design protocols for Mobile Application, website, and admin dashboard.',
            'Designed 350+ screens for mobile application, website, and Admin dashboard.',
            'Spearheaded the designs and development of the Application and Company website.',
            'Collaborated with the development team to achieve Application deployment set for launch date.'
          ]
        }
      ],
      education: [
        {
          school: 'National Open University of Calabar',
          course: 'Health Education - In Progress',
          year: '2024'
        },
        {
          school: 'University of Calabar',
          course: 'Human Physiology',
          year: '2021'
        }
      ]
    }
  }
}
</script>