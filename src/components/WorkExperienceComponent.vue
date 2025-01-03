<template>
<section class="mt-[140px] py-16 max-w-[1440px]">
    <div class="w-[1224px] h-[4px] bg-[#DBC1AC] mb-8"></div>

        <div class="flex w-[1156px]">
        <!-- Left Side: Work Experience -->
        <div class="grid grid-cols-[808px,348px] gap-[24px]">
          <div class="max-w-[1180px]">
          <h3 class="text-[36px] font-primary font-medium my-[20px] text-[#333333]">Work Experience</h3>

          <div v-for="(job, index) in workExperience" :key="index">
            <div class="grid grid-cols-[309px,492px] gap-[4px]">
              <!-- Left column: Period -->
              <div>
                <p class="text-[20px] font-secondary font-semibold w-[309px] text-[#333333]">{{ job.period }}</p>
              </div>
              
              <!-- Right column: Job Details -->
              <div class="w-[492px]">
                <p class="font-medium text-[24px] font-secondary text-[#333333]">{{ job.company }}</p>
                <p class="text-[16px] font-secondary font-normal text-[#6C757D]">{{ job.role }}</p>
                <ul class="list-disc space-y-2 text-[20px] font-secondary font-normal w-[492px] mt-[16px] text-[#333333]">
                  <li v-for="(point, idx) in job.points" :key="idx">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[348px]">
        <h3 class="text-[36px] font-primary font-medium my-[20px]">Education</h3>
        <div class="space-y-2">
          <div v-for="(edu, index) in education" :key="index">
            <p class="text-[24px] font-secondary font-medium text-[#333333]">{{ edu.school }}</p>
            <p class="text-[16px] font-secondary font-normal text-[#6C757D] mt-[4px]">{{ edu.course }}</p>
            <p class="text-[16px] font-secondary font normal text-[#6c757d] mt-[2px]">{{ edu.year }}</p>
          </div>
        </div>

        <section class="mt-[48px]">
  <h3 class="text-[36px] font-primary font-medium mb-[16px]">Contact Me</h3>
  <div class="grid grid-cols-[48px, 48px, 48px] gap-[24px]">
    <div class="hover:opacity-80">
      <img src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735928366/u_linkedin_gmhekn.svg" alt="LinkedIn" class="w-[48px] h-[48px]"/>
    </div>
      <div class="hover:opacity-80">
      <img src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735928402/u_instagram_kxbnkx.svg" alt="Instagram" class="w-[48px] h-[48px]"/>
      </div>
    <div class="hover:opacity-80">
      <img src="https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735928349/u_behance-alt_xjmph6.svg" alt="Behance" class="w-[48px] h-[48px]"/>
    </div>
  </div>
</section>
    </div>
    </div>
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
      ], 
    }
  }
}
</script>