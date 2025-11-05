import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Github, Linkedin, Leaf, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft mist overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-200/50 via-emerald-50/40 to-white/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-emerald-950">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-200/60 px-3 py-1 shadow">
            <Leaf className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-800">Welcome</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-emerald-900 sm:text-6xl">
            Calm, whimsical interfaces inspired by Ghibli
          </h1>
          <p className="mt-4 text-base text-emerald-900/80 sm:text-lg">
            I craft gentle, nature‑themed digital experiences—soft colors, thoughtful motion,
            and accessible design. Let\'s build something serene.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cv"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 font-medium text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              View CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white/70 px-4 py-2 font-medium text-emerald-900 border border-emerald-200 hover:bg-white transition-colors"
            >
              Explore Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-2 text-emerald-800 hover:bg-emerald-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-2 text-emerald-800 hover:bg-emerald-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-emerald-900/70">
            <Wind className="h-4 w-4" />
            <span className="text-sm">Soft palettes • Natural motifs • Gentle motion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
