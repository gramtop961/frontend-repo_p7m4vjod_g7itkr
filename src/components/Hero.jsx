import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Github, Linkedin, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
            <User className="h-4 w-4" />
            <span className="text-sm">Hi, I’m</span>
            <span className="text-sm font-semibold">Your Name</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Building delightful digital experiences
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Full‑stack developer focused on crafting interactive, responsive, and
            accessible web applications. I love turning ideas into products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cv"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black shadow hover:shadow-lg transition-shadow"
            >
              <Download className="h-4 w-4" />
              View CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-black/50 px-4 py-2 font-medium text-white border border-white/20 hover:bg-black/60 transition-colors"
            >
              Explore Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-emerald-500/90 px-4 py-2 font-medium text-white hover:bg-emerald-500 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
