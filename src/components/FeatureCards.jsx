import { FileText, GitCompare, Workflow, Download, Upload, Bell } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: Upload,
      title: "Upload & Versioning",
      desc: "Add PDFs, DOC, and TXT. Keep up to 5 versions with instant diffs.",
    },
    {
      icon: GitCompare,
      title: "Smart Differences",
      desc: "Readable, text-based changes between versions with highlights.",
    },
    {
      icon: Workflow,
      title: "Impact Analysis",
      desc: "AI finds related documents and explains potential effects.",
    },
    {
      icon: Download,
      title: "Secure Storage",
      desc: "Backed by cloud object storage with audit-ready history.",
    },
    {
      icon: Bell,
      title: "Status Tracking",
      desc: "Mark impacts Unread, Claimed, or Resolved to drive action.",
    },
    {
      icon: FileText,
      title: "Dashboards",
      desc: "See recent changes and impacted docs at a glance.",
    },
  ];

  return (
    <section id="features" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Designed for clarity</h2>
        <p className="mt-2 text-white/70 max-w-2xl">An opinionated set of tools that map directly to your requirements—authentication, document list, dashboards, and detailed impact workflows.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition shadow-lg shadow-black/20">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-sky-500/30 to-indigo-500/30 p-2 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-[0] bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
    </section>
  );
}
