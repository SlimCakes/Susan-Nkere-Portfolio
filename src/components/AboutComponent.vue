<template>
  <!-- About Section -->
  <section class="max-w-[1440px]">
    <div class="flex items-center justify-start w-[1180px] mt-[328px] mb-[100px] gap-40">
      <h2 class="text-[32px] font-primary text-[#333333] w-[140px]">About Me</h2>
      <div class="w-[923px] h-[4px] bg-[#DBC1AC]"></div>
    </div>

    <div class="grid grid-cols-[728px,742px]">
    <div class="grid grid-row-0 gap-[8px]">
      <h3 class="text-[96px] font-primary font-semibold text-[#333333]">Hello there!</h3>
      <!-- Left Column: Text Content -->
      <div class="space-y-8">
        <p class=" w-[600px] text-[24px] font-secondary font-normal text-[#333333] leading-9">
          I'm Susan, a UX/UI & product designer, from Nigeria. From mobile applications 
          to websites to personal portfolios, I specialise in building visually appealing 
          and user centered designs. I strive to develop key features such as empathy, 
          problem solving, creativity and visualization which i believe forms the 
          foundation of Design.
        </p>

        <!-- Skills and Software Grid -->
        <div class="grid grid-cols-2 gap-40">
          <div>
            <h4 class="text-[36px] font-primary font-medium text-[#333333] mb-4">Skills</h4>
            <ul class="text-[24px] font-secondary font-normal text-[#333333] space-y-1 w-[350px]">
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
            <h4 class="text-[36px] font-primary font-medium text-[#333333] mb-4">Software</h4>
            <ul class="text-[24px] font-secondary font-normal text-[#333333] space-y-1 w-[392px]">
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
          <div className="absolute">
        <img 
          src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735330104/Group_11_vqrtho.png"
          alt="Profile"
          class="relative z-10 w-full h-auto object-cover" />
      </div>
      </div>
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