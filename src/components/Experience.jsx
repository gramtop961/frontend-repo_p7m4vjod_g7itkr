import React from 'react';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const Item = ({ title, org, time, desc }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-emerald-500" />
    <h4 className="text-lg font-semibold text-emerald-900">{title}</h4>
    <div className="text-sm text-emerald-900/70">{org} • {time}</div>
    <p className="mt-2 text-sm text-emerald-900/80">{desc}</p>
  </div>
);

const Column = ({ icon: Icon, title, items }) => (
  <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-6 shadow-sm backdrop-blur">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-200/60 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-emerald-900">{title}</h3>
    </div>
    <div className="space-y-6 border-l border-emerald-200/60 pl-3">
      {items.map((it, i) => (
        <Item key={i} {...it} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  const education = [
    {
      title: 'B.Sc. in Computer Science',
      org: 'Tech University',
      time: '2017 — 2021',
      desc: 'Focused on software engineering, human‑computer interaction, and distributed systems.'
    },
    {
      title: 'Frontend Nanodegree',
      org: 'Udacity',
      time: '2022',
      desc: 'Advanced React, accessibility, and performance optimization.'
    }
  ];

  const work = [
    {
      title: 'Frontend Engineer',
      org: 'Acme Inc.',
      time: '2023 — Present',
      desc: 'Building design systems and high‑performance, accessible interfaces.'
    },
    {
      title: 'Full‑stack Developer',
      org: 'Startup Studio',
      time: '2021 — 2023',
      desc: 'Shipped multiple MVPs with React, Node/FastAPI, and cloud services.'
    }
  ];

  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-200/60 px-3 py-1 text-emerald-800">
          <BookOpen className="h-4 w-4" />
          <span className="text-sm">Journey</span>
        </div>
        <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Education & Work</h2>
        <p className="mt-2 text-emerald-900/70">A tranquil overview of my background.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Column icon={GraduationCap} title="Education" items={education} />
        <Column icon={Briefcase} title="Work Experience" items={work} />
      </div>

      {/* CV Section */}
      <div id="cv" className="mt-16 rounded-2xl border border-emerald-200/60 bg-white/70 p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-emerald-950">Curriculum Vitae</h3>
        <p className="mt-2 text-emerald-900/70">
          Below is a serene snapshot of my CV. Reach out for a full version.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-emerald-900">Profile</h4>
            <p className="mt-2 text-sm text-emerald-900/80">
              Full‑stack developer with a love for gentle interactions, performance, and accessible design.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">Core Skills</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-emerald-900/80">
              <li>React, TypeScript, Next.js, Vite</li>
              <li>Node.js, FastAPI, REST</li>
              <li>MongoDB, PostgreSQL</li>
              <li>Testing, CI/CD, Cloud</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">Recent Experience</h4>
            <ul className="mt-2 space-y-2 text-sm text-emerald-900/80">
              <li>Frontend Engineer @ Acme — Design systems, performance, accessibility</li>
              <li>Full‑stack Dev @ Startup Studio — MVPs, discovery, delivery</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">Education</h4>
            <ul className="mt-2 space-y-2 text-sm text-emerald-900/80">
              <li>B.Sc. Computer Science — Tech University</li>
              <li>Frontend Nanodegree — Udacity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
