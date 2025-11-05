import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Item = ({ title, org, time, desc }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-emerald-500" />
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <div className="text-sm text-white/70">{org} • {time}</div>
    <p className="mt-2 text-sm text-white/80">{desc}</p>
  </div>
);

const Column = ({ icon: Icon, title, items }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-6 border-l border-white/10 pl-3">
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
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Education & Work</h2>
        <p className="mt-2 text-white/70">A quick overview of my background and career journey.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Column icon={GraduationCap} title="Education" items={education} />
        <Column icon={Briefcase} title="Work Experience" items={work} />
      </div>

      {/* CV Section */}
      <div id="cv" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8">
        <h3 className="text-2xl font-semibold text-white">Curriculum Vitae</h3>
        <p className="mt-2 text-white/70">
          Below is a concise snapshot of my CV. Feel free to reach out for a full version or custom version tailored to a role.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-white">Profile</h4>
            <p className="mt-2 text-sm text-white/80">
              Full‑stack developer with a passion for interaction design, performance, and developer experience. I thrive in cross‑functional teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Core Skills</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              <li>React, TypeScript, Next.js, Vite</li>
              <li>Node.js, FastAPI, REST</li>
              <li>MongoDB, PostgreSQL, Prisma/Mongoose</li>
              <li>Testing, CI/CD, Cloud (Vercel, Fly, AWS)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Recent Experience</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li>Frontend Engineer @ Acme — Design systems, performance, accessibility</li>
              <li>Full‑stack Dev @ Startup Studio — MVPs, product discovery, rapid delivery</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Education</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
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
