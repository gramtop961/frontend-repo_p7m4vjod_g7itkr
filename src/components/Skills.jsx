import React from 'react';
import { Sprout, Wrench } from 'lucide-react';

const SkillBar = ({ name, level }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-sm">
      <span className="text-emerald-900/90">{name}</span>
      <span className="text-emerald-900/60">{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-emerald-200/50">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-400"
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
        <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-200/60 px-3 py-1 text-emerald-800">
          <Sprout className="h-4 w-4" />
          <span className="text-sm">Skills</span>
        </div>
        <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">What I work with</h2>
        <p className="mt-2 text-emerald-900/70">Tools and tech that keep projects breezy.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5 rounded-2xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
        <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-900">
            <Wrench className="h-5 w-5" /> Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-sm text-emerald-900/80"
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
