export default (await import('vue')).defineComponent({
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
        };
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mt-[140px] py-16 max-w-[1440px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[1224px] h-[4px] bg-[#DBC1AC] mb-8 mt-[140px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-[1156px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[808px,348px] gap-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-[1180px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[32px] font-primary font-medium my-[20px] text-[#333333]") }, });
    for (const [job, index] of __VLS_getVForSourceType((__VLS_ctx.workExperience))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[309px,492px] gap-[4px] my-[24px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[18px] font-secondary font-semibold w-[309px] text-[#333333]") }, });
        (job.period);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[492px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium text-[20px] font-secondary text-[#333333]") }, });
        (job.company);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[14px] font-secondary font-normal text-[#6C757D]") }, });
        (job.role);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-disc space-y-2 text-[16px] font-secondary font-normal w-[420px] mt-[12px] mb-[20px] text-[#333333]") }, });
        for (const [point, idx] of __VLS_getVForSourceType((job.points))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((idx)), });
            (point);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[348px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[32px] font-primary font-medium my-[20px] text-[#333333]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    for (const [edu, index] of __VLS_getVForSourceType((__VLS_ctx.education))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[20px] font-secondary font-medium text-[#333333] mt-[24px]") }, });
        (edu.school);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[14px] font-secondary font-normal text-[#6C757D] mt-[4px]") }, });
        (edu.course);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[12px] font-secondary font normal text-[#6c757d] mt-[2px]") }, });
        (edu.year);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mt-[48px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[36px] font-primary font-medium mb-[16px] text-[#333333]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[40px,40px,40px] gap-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hover:opacity-80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.linkedin.com/in/susan-nkere/"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735928366/u_linkedin_gmhekn.svg"), alt: ("LinkedIn"), ...{ class: ("w-[48px] h-[48px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hover:opacity-80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.instagram.com/biig.sue/"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735928402/u_instagram_kxbnkx.svg"), alt: ("Instagram"), ...{ class: ("w-[48px] h-[48px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hover:opacity-80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.behance.net/susannkere#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/dxgoaa5mn/image/upload/v1735928349/u_behance-alt_xjmph6.svg"), alt: ("Behance"), ...{ class: ("w-[48px] h-[48px]") }, });
    __VLS_styleScopedClasses['mt-[140px]'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['max-w-[1440px]'];
    __VLS_styleScopedClasses['w-[1224px]'];
    __VLS_styleScopedClasses['h-[4px]'];
    __VLS_styleScopedClasses['bg-[#DBC1AC]'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['mt-[140px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['w-[1156px]'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[808px,348px]'];
    __VLS_styleScopedClasses['gap-[24px]'];
    __VLS_styleScopedClasses['max-w-[1180px]'];
    __VLS_styleScopedClasses['text-[32px]'];
    __VLS_styleScopedClasses['font-primary'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['my-[20px]'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[309px,492px]'];
    __VLS_styleScopedClasses['gap-[4px]'];
    __VLS_styleScopedClasses['my-[24px]'];
    __VLS_styleScopedClasses['text-[18px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['w-[309px]'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['w-[492px]'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-[20px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['text-[14px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['font-normal'];
    __VLS_styleScopedClasses['text-[#6C757D]'];
    __VLS_styleScopedClasses['list-disc'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['text-[16px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['font-normal'];
    __VLS_styleScopedClasses['w-[420px]'];
    __VLS_styleScopedClasses['mt-[12px]'];
    __VLS_styleScopedClasses['mb-[20px]'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['w-[348px]'];
    __VLS_styleScopedClasses['text-[32px]'];
    __VLS_styleScopedClasses['font-primary'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['my-[20px]'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['text-[20px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['mt-[24px]'];
    __VLS_styleScopedClasses['text-[14px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['font-normal'];
    __VLS_styleScopedClasses['text-[#6C757D]'];
    __VLS_styleScopedClasses['mt-[4px]'];
    __VLS_styleScopedClasses['text-[12px]'];
    __VLS_styleScopedClasses['font-secondary'];
    __VLS_styleScopedClasses['font'];
    __VLS_styleScopedClasses['normal'];
    __VLS_styleScopedClasses['text-[#6c757d]'];
    __VLS_styleScopedClasses['mt-[2px]'];
    __VLS_styleScopedClasses['mt-[48px]'];
    __VLS_styleScopedClasses['text-[36px]'];
    __VLS_styleScopedClasses['font-primary'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-[16px]'];
    __VLS_styleScopedClasses['text-[#333333]'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-[40px,40px,40px]'];
    __VLS_styleScopedClasses['gap-[24px]'];
    __VLS_styleScopedClasses['hover:opacity-80'];
    __VLS_styleScopedClasses['w-[48px]'];
    __VLS_styleScopedClasses['h-[48px]'];
    __VLS_styleScopedClasses['hover:opacity-80'];
    __VLS_styleScopedClasses['w-[48px]'];
    __VLS_styleScopedClasses['h-[48px]'];
    __VLS_styleScopedClasses['hover:opacity-80'];
    __VLS_styleScopedClasses['w-[48px]'];
    __VLS_styleScopedClasses['h-[48px]'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
