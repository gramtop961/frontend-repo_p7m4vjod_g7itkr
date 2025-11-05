import React from 'react';
import { Code } from 'lucide-react';

const SkillBar = ({ name, level }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-sm">
      <span className="text-white/90">{name}</span>
      <span className="text-white/60">{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
        style={{ width: `${level}%` }}
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
        <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1 text-emerald-300">
          <Code className="h-4 w-4" />
          <span className="text-sm">Skills</span>
        </div>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What I work with</h2>
        <p className="mt-2 text-white/70">A snapshot of technologies I use day‑to‑day.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
