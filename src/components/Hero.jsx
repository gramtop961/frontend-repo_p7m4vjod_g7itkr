import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Github, Leaf, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

const boilTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft mist overlays for readability (kept non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-200/60 via-emerald-50/50 to-white/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      {/* Floating cloud puffs for cartoony depth */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-28 h-32 w-56 rounded-full bg-white/70 blur-xl"
        animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
        transition={floatTransition}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-10 top-10 h-24 w-40 rounded-full bg-white/70 blur-xl"
        animate={{ y: [0, 10, 0], x: [0, 6, 0], scale: [1, 1.02, 1] }}
        transition={{ ...floatTransition, duration: 7.5 }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          className="max-w-2xl text-emerald-950"
          animate={{ rotate: [0, -0.3, 0.4, 0], scale: [1, 1.005, 0.995, 1] }}
          transition={boilTransition}
        >
          <motion.div
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-200/70 px-3 py-1 shadow"
            animate={{ y: [0, -2, 0] }}
            transition={{ ...floatTransition, duration: 3.5 }}
          >
            <Leaf className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-800">Kaze no oto — a breezy space</span>
          </motion.div>

          <h1 className="text-4xl font-black leading-tight text-emerald-900 sm:text-6xl">
            Hand‑drawn, cartoony motion with a Ghibli heart
          </h1>
          <p className="mt-4 text-base text-emerald-900/85 sm:text-lg">
            Soft palettes, storybook edges, and gentle frame‑to‑frame wobble. Interfaces that
            feel alive — warm and whimsical.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cv"
              className="inline-flex items-center gap-2 rounded-md border-4 border-emerald-900/20 bg-emerald-600 px-4 py-2 font-semibold text-white shadow-[0_4px_0_#065f46] hover:translate-y-[1px] hover:shadow-[0_3px_0_#065f46] active:translate-y-[2px] active:shadow-[0_2px_0_#065f46] transition"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border-4 border-emerald-900/15 bg-white/80 px-4 py-2 font-semibold text-emerald-900 shadow-[0_4px_0_#d1fae5] hover:translate-y-[1px] hover:shadow-[0_3px_0_#d1fae5] active:translate-y-[2px] active:shadow-[0_2px_0_#d1fae5] transition"
            >
              See Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md border-4 border-sky-900/10 bg-sky-600 px-4 py-2 font-semibold text-white shadow-[0_4px_0_#075985] hover:translate-y-[1px] hover:shadow-[0_3px_0_#075985] active:translate-y-[2px] active:shadow-[0_2px_0_#075985] transition"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-md border-4 border-emerald-900/10 bg-emerald-100 px-3 py-2 font-semibold text-emerald-900 shadow-[0_4px_0_#bbf7d0] hover:translate-y-[1px] hover:shadow-[0_3px_0_#bbf7d0] active:translate-y-[2px] active:shadow-[0_2px_0_#bbf7d0] transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-emerald-900/80">
            <Wind className="h-4 w-4" />
            <span className="text-sm">Pastel skies • Hand‑drawn wobble • Whimsical calm</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
