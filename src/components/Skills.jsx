import React from 'react';
import { Sprout, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-sm">
      <span className="font-medium text-emerald-900">{name}</span>
      <span className="text-emerald-900/70">{level}%</span>
    </div>
    <div className="h-3 w-full rounded-full border-4 border-emerald-900/10 bg-emerald-200/40">
      <motion.div
        className="h-[10px] rounded-full bg-gradient-to-r from-emerald-500 to-sky-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
      />
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'FastAPI', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 70 },
  ];

  const tools = ['Git', 'Vite', 'Framer Motion', 'Jest', 'Playwright', 'Vercel', 'Docker'];

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-200/70 px-3 py-1 text-emerald-800">
          <Sprout className="h-4 w-4" />
          <span className="text-sm">Skills</span>
        </div>
        <h2 className="text-3xl font-black text-emerald-950 sm:text-4xl">What I work with</h2>
        <p className="mt-2 text-emerald-900/80">Playful, bouncy meters and tools I love.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5 rounded-2xl border-4 border-emerald-900/10 bg-white/80 p-6 shadow-[0_8px_0_#d1fae5]">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
        <div className="rounded-2xl border-4 border-emerald-900/10 bg-white/80 p-6 shadow-[0_8px_0_#d1fae5]">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-emerald-900">
            <Wrench className="h-5 w-5" /> Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t, idx) => (
              <motion.span
                key={t}
                className="rounded-full border-4 border-emerald-900/10 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-900 shadow-[0_4px_0_#bbf7d0]"
                animate={{ y: [0, idx % 2 ? -2 : 2, 0] }}
                transition={{ duration: 3 + (idx % 3), repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
