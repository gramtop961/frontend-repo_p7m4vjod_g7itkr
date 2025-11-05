import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, tags, live, repo, image }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
    {image ? (
      <img src={image} alt="" className="h-44 w-full object-cover opacity-90 transition group-hover:opacity-100" />
    ) : (
      <div className="h-44 w-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20" />
    )}
    <div className="p-6">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/70 border border-white/10">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-emerald-500/90 px-3 py-1.5 text-sm text-white hover:bg-emerald-500"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Interactive Portfolio',
      desc: 'A modern 3D‑powered portfolio with Spline and smooth animations.',
      tags: ['React', 'Vite', 'Spline', 'Tailwind'],
      live: '#',
      repo: '#'
    },
    {
      title: 'Real‑time Dashboard',
      desc: 'Live metrics, charts, and alerts with delightful micro‑interactions.',
      tags: ['Next.js', 'WebSockets', 'Chart.js'],
      live: '#',
      repo: '#'
    },
    {
      title: 'E‑commerce Starter',
      desc: 'Headless storefront with performance and accessibility in mind.',
      tags: ['React', 'Stripe', 'FastAPI'],
      live: '#',
      repo: '#'
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-white/70">A few highlights showcasing design, performance, and developer experience.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
