<template>
  <!-- About Section -->
  <section class="max-w-[1440px]">
    <div class="flex items-center justify-start w-[1180px] mt-[328px] mb-[100px] gap-40">
      <h2 class="text-[32px] font-primary text-[#333333] w-[140px]">About Me</h2>
      <div class="w-[923px] h-[4px] bg-[#DBC1AC]"></div>
    </div>

    <div class="grid grid-cols-[728px,742px]">
    <div class="grid grid-row-0 gap-[8px]">
      <h3 class="text-[88px] font-primary font-semibold text-[#333333]">Hello there!</h3>
      <!-- Left Column: Text Content -->
      <div class="space-y-8">
        <p class=" w-[600px] text-[20px] font-secondary font-normal text-[#333333] leading-9">
          I'm Susan, a UX/UI & product designer, from Nigeria. From mobile applications 
          to websites to personal portfolios, I specialise in building visually appealing 
          and user centered designs. I strive to develop key features such as empathy, 
          problem solving, creativity and visualization which i believe forms the 
          foundation of Design.
        </p>

        <!-- Skills and Software Grid -->
        <div class="grid grid-cols-2 gap-40">
          <div>
            <h4 class="text-[32px] font-primary font-medium text-[#333333] mb-4">Skills</h4>
            <ul class="text-[20px] font-secondary font-normal text-[#333333] space-y-1 w-[350px]">
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
            <h4 class="text-[32px] font-primary font-medium text-[#333333] mb-4">Software</h4>
            <ul class="text-[20px] font-secondary font-normal text-[#333333] space-y-1 w-[392px]">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>VScode</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <!-- Right Column: Image -->
      <div class="absolute top-[1178px] left-[720px] w-[742px]">
          <div class="absolute">
        <img 
          src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735330104/Group_11_vqrtho.png"
          alt="Profile"
          class="relative z-10 w-[742px] h-[1017px] object-cover"/>
      </div>
      </div>
    </div>
  </section>
  </template>