import React from 'react';
import { Github, ExternalLink, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, desc, tags, live, repo, image, i }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl border-4 border-emerald-900/10 bg-white/80 shadow-[0_8px_0_#d1fae5]"
    whileHover={{ rotate: i % 2 ? -1.5 : 1.5, y: -4 }}
    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
  >
    {image ? (
      <img src={image} alt="" className="h-44 w-full object-cover opacity-90 transition group-hover:opacity-100" />
    ) : (
      <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-sky-100 text-emerald-700">
        <Cloud className="h-6 w-6" />
      </div>
    )}
    <div className="p-6">
      <h4 className="text-lg font-extrabold text-emerald-900">{title}</h4>
      <p className="mt-2 text-sm text-emerald-900/85">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-md border-4 border-emerald-900/10 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-900 shadow-[0_3px_0_#bbf7d0]">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border-4 border-emerald-900/20 bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_4px_0_#065f46] hover:translate-y-[1px] hover:shadow-[0_3px_0_#065f46] active:translate-y-[2px] active:shadow-[0_2px_0_#065f46]"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border-4 border-emerald-900/10 bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-900 shadow-[0_4px_0_#bbf7d0] hover:translate-y-[1px]"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Interactive Portfolio',
      desc: 'A serene portfolio with storybook motion and soft edges.',
      tags: ['React', 'Vite', 'Spline', 'Tailwind'],
      live: '#',
      repo: '#'
    },
    {
      title: 'Real‑time Dashboard',
      desc: 'Live metrics with friendly micro‑interactions.',
      tags: ['Next.js', 'WebSockets', 'Charts'],
      live: '#',
      repo: '#'
    },
    {
      title: 'E‑commerce Starter',
      desc: 'Headless storefront with calm UX and speed.',
      tags: ['React', 'Stripe', 'FastAPI'],
      live: '#',
      repo: '#'
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-emerald-950 sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-emerald-900/80">Cartoony yet clean — cheerful details without clutter.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} i={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
