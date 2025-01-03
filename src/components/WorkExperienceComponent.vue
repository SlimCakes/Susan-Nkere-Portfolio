<template>
<section class="mt-[140px] py-16 max-w-[1440px]">
    <div class="w-[1224px] h-[4px] bg-[#DBC1AC] mb-8"></div>

        <div class="flex w-[1156px]">
        <!-- Left Side: Work Experience -->
        <div class="grid grid-cols-[808px,348px] gap-[24px]">
          <div class="max-w-[1180px]">
          <h3 class="text-[36px] font-primary font-medium my-[20px] text-[#333333]">Work Experience</h3>

          <div v-for="(job, index) in workExperience" :key="index">
            <div class="grid grid-cols-[309px,492px] gap-[4px] my-[48px]">
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
        <h3 class="text-[36px] font-primary font-medium my-[20px] text-[#333333]">Education</h3>
        <div class="space-y-2">
          <div v-for="(edu, index) in education" :key="index">
            <p class="text-[24px] font-secondary font-medium text-[#333333] mt-[48px]">{{ edu.school }}</p>
            <p class="text-[16px] font-secondary font-normal text-[#6C757D] mt-[4px]">{{ edu.course }}</p>
            <p class="text-[16px] font-secondary font normal text-[#6c757d] mt-[2px]">{{ edu.year }}</p>
          </div>
        </div>

        <section class="mt-[48px]">
  <h3 class="text-[36px] font-primary font-medium mb-[16px] text-[#333333]">Contact Me</h3>
  <div class="grid grid-cols-[48px,48px,48px] gap-[24px]">
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
        },
        {
  period: 'February 2024 - May 2024',
  company: 'Aptech • Calabar',
  role: 'Web Design Tutor',
  points: [
    'Developed and delivered a comprehensive web design curriculum encompassing fundamentals of HTML, CSS, JavaScript, and responsive design principles to students of varying skill levels.',
    'Ensured the practical application of design theory and coding standards.',
    'Regularly assessed and adapted lesson plans to meet individual student needs and industry trends.',
    'Provided one-on-one mentorship and support to enhance learning outcomes and career readiness.'
  ]
},
{
  period: 'January 2021 - Present',
  company: 'Freelance/Self Employed • Nigeria',
  role: 'Freelance Designer',
  points: [
    'Developed and deployed over 15 creative concepts for a designer portfolio, increasing client engagement and project inquiries by 20%.',
    'Improved dating app user interface in collaboration with cross-functional team members, leading to a 25% rise in user retention.',
    'Collaborated with stakeholders on "SendFunds" to create high-fidelity designs from provided wireframes using industry-standard tools.',
    'Analyzed user experience feedback for the Lykluk App and developed a new user interface to enhance user experience and retention.'
  ]
},
{
  period: 'August 2023 - September 2023',
  company: 'Block Traders Academy • Nigeria',
  role: 'User Interface Designer',
  points: [
    'Conducted user research to understand target audience needs, preferences, and behavior.',
    'Developed wireframes to visualize the layout, structure, and flow of the interface for early testing and feedback.',
    'Created visually appealing designs aligned with branding and style guidelines.',
    'Collaborated with team members, developers, and stakeholders to ensure design alignment with project goals and technical constraints.'
  ]
},
{
  period: 'May 2023 - August 2023',
  company: 'Tanta Innovative Limited • Lagos, Nigeria',
  role: 'User Interface Design Intern',
  points: [
    'Spearheaded the design team, working on three major projects with over 150 screens.',
    'Conducted user research and usability testing to inform design decisions and ensure a seamless user experience.',
    'Collaborated with product managers, developers, QA, cybersecurity, and stakeholders to refine and implement design solutions.',
    'Created wireframes and prototypes using industry-standard tools.',
    'Implemented a user-centric design approach, resulting in a 30% decrease in bounce rate.',
    'Designed and deployed over 100 high-fidelity mobile and website designs, mockups, and prototypes, leading to a 20% boost in customer satisfaction.'
  ]
},
{
  period: 'July 2022 - April 2023',
  company: 'JK Agerland • Lagos, Nigeria',
  role: 'User Interface and User Experience Designer',
  points: [
    'Conducted user research and usability testing to inform design decisions and ensure a seamless user experience.',
    'Collaborated with product managers, designers, and engineers to understand user needs and translate them into intuitive products.',
    'Created wireframes and prototypes using industry-standard tools.',
    'Developed and executed a comprehensive design strategy, resulting in the successful creation of high-fidelity designs for over 120 screens within a tight deadline of 2-3 months, enabling the agro-based start-up to have designs ready for launch.'
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