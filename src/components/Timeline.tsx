// 'use client';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { MdWork, MdSchool } from 'react-icons/md';

// const timelineData = [
//   {
//     title: 'Started B.Tech',
//     subtitle: '2021 - Dropped in 2nd Year',
//     description: 'Explored core CS, but transitioned to full-time development and freelancing.',
//     icon: <MdSchool />,
//   },
//   {
//     title: 'Built Tuition Management System',
//     subtitle: '2023',
//     description: 'End-to-end full stack app for managing tuition batches, students, and payments.',
//     icon: <MdWork />,
//   },
//   {
//     title: 'Started Freelancing & Personal Projects',
//     subtitle: '2024',
//     description: 'Built several client apps and continued expanding portfolio with cutting-edge tech.',
//     icon: <MdWork />,
//   },
// ];

// export default function Timeline() {
//   return (
//     <section className="py-20 px-4 bg-[#0a0a0a] text-white" id="timeline">
//       <h2 className="text-4xl font-bold text-center mb-12">📅 My Journey</h2>
//       <VerticalTimeline>
//         {timelineData.map((item, index) => (
//           <VerticalTimelineElement
//             key={index}
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: '#111', color: '#fff' }}
//             contentArrowStyle={{ borderRight: '7px solid #111' }}
//             iconStyle={{ background: '#00C9A7', color: '#fff' }}
//             icon={item.icon}
//           >
//             <h3 className="vertical-timeline-element-title text-xl">{item.title}</h3>
//             <h4 className="vertical-timeline-element-subtitle text-gray-400">{item.subtitle}</h4>
//             <p className="text-sm text-gray-300">{item.description}</p>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
