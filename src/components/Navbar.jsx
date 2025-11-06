import { LogIn, FileText, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black/70 to-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 shadow-lg shadow-sky-500/30" />
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold tracking-tight">ImpactDocs</span>
            <span className="text-[10px] text-white/60">AI-driven document intelligence</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#screens" className="hover:text-white transition">Screens</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#auth" className="hover:text-white transition">Sign in</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400">
          <LogIn size={16} />
          Sign in
        </button>
      </div>
    </header>
  );
}
