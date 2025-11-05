import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Rocket, Mail } from 'lucide-react';

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#cv', label: 'CV' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[95%] max-w-7xl rounded-full border border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide">My Portfolio</span>
          </a>
          <div className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Built with React, Tailwind, and Spline.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

      <Navbar />
      <main className="pt-24">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
