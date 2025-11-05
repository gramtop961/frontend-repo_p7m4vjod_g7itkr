import React from 'react';
import { Github, ExternalLink, Cloud } from 'lucide-react';

const ProjectCard = ({ title, desc, tags, live, repo, image }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/70 shadow-sm">
    {image ? (
      <img src={image} alt="" className="h-44 w-full object-cover opacity-90 transition group-hover:opacity-100" />
    ) : (
      <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-sky-100 text-emerald-700">
        <Cloud className="h-6 w-6" />
      </div>
    )}
    <div className="p-6">
      <h4 className="text-lg font-semibold text-emerald-900">{title}</h4>
      <p className="mt-2 text-sm text-emerald-900/80">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-md border border-emerald-200/60 bg-emerald-50 px-2 py-1 text-xs text-emerald-900/80">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-700"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-3 py-1.5 text-sm text-emerald-900 hover:bg-emerald-200"
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
      desc: 'A serene, 3D‑touched portfolio with soft motion and nature accents.',
      tags: ['React', 'Vite', 'Spline', 'Tailwind'],
      live: '#',
      repo: '#'
    },
    {
      title: 'Real‑time Dashboard',
      desc: 'Live metrics and gentle micro‑interactions that feel like a breeze.',
      tags: ['Next.js', 'WebSockets', 'Charts'],
      live: '#',
      repo: '#'
    },
    {
      title: 'E‑commerce Starter',
      desc: 'Headless storefront with an emphasis on calm UX and speed.',
      tags: ['React', 'Stripe', 'FastAPI'],
      live: '#',
      repo: '#'
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-emerald-900/70">Highlights that balance clarity, warmth, and performance.</p>
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
