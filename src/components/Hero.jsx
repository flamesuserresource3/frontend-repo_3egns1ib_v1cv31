import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur">
            <Sparkles size={14} className="text-sky-300" />
            AI-powered impact analysis
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Understand how every change impacts your knowledge base
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Upload documents, version updates, and instantly see differences and downstream impacts across your organization. Secure, searchable, and powered by state-of-the-art AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg bg-sky-500/90 hover:bg-sky-500 text-white px-4 py-2 font-medium shadow-lg shadow-sky-500/30">
              Get started
            </button>
            <button className="rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 font-medium ring-1 ring-white/15">
              Live demo
            </button>
          </div>
          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-400"/> SSO Ready</div>
            <div className="flex items-center gap-2"><Rocket size={18} className="text-sky-400"/> Fast setup</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
    </section>
  );
}
