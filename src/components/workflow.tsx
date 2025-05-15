import { FaCode, FaPaintBrush, FaBug, FaRocket } from 'react-icons/fa';

const steps = [
  {
    title: 'Design & Prototype',
    icon: <FaPaintBrush />,
    desc: 'User-focused design wireframes and interaction planning.',
  },
  {
    title: 'Code & Develop',
    icon: <FaCode />,
    desc: 'Build scalable frontend & backend solutions with clean architecture.',
  },
  {
    title: 'Debug & Optimize',
    icon: <FaBug />,
    desc: 'Test thoroughly and improve performance before launch.',
  },
  {
    title: 'Deploy & Deliver',
    icon: <FaRocket />,
    desc: 'Launch with CI/CD and deliver impactful results.',
  },
];

export default function Workflow() {
  return (
    <section className="py-20 px-4 bg-black text-white" id="workflow">
      <h2 className="text-4xl font-bold text-center mb-12">🧠 My Workflow</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-[#111] border border-gray-800 rounded-xl text-center shadow hover:shadow-lg transition-all"
          >
            <div className="text-3xl mb-3 text-cyan-400 mx-auto">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
