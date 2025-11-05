import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Leaf, Mail } from 'lucide-react';

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[95%] max-w-7xl rounded-full border border-emerald-200/40 bg-white/60 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-2 text-emerald-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200/70 text-emerald-700 shadow">
              <Leaf className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide">Studio‑inspired Portfolio</span>
          </a>
          <div className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-emerald-800/90 hover:text-emerald-900">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-600"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function SkyBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[1]">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-emerald-50 to-white" />
      <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute top-40 -right-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-sky-300/40 blur-3xl" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-200/40 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-emerald-900/80">
        © {new Date().getFullYear()} Your Name — Gentle, hand‑drawn motion with a Ghibli soul.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen text-emerald-950">
      <SkyBackdrop />
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
