import { Shield, Lock, ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="relative border-t border-white/10" id="auth">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white">Ready to secure your document intelligence?</h3>
            <p className="mt-2 text-white/70 max-w-2xl">Sign in to start uploading documents, tracking versions, and seeing AI-powered impacts instantly.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-white/70 text-sm">
              <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400"/> SSO & JWT</div>
              <div className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-sky-400"/> Role-based access</div>
            </div>
          </div>
          <div className="flex md:justify-end">
            <button className="inline-flex items-center gap-2 rounded-lg bg-sky-500/90 hover:bg-sky-500 text-white px-4 py-2 font-medium shadow-lg shadow-sky-500/30">
              Sign in <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} ImpactDocs. All rights reserved.</div>
      </div>
    </footer>
  );
}
