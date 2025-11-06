import { FileText, LayoutDashboard, GitDiff, Activity, User, Download, UploadCloud, Layers } from "lucide-react";

function ScreenCard({ title, subtitle, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-white">{title}</h4>
          <p className="text-xs text-white/60">{subtitle}</p>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/30 p-3 min-h-[160px]">
        {children}
      </div>
    </div>
  );
}

export default function ScreensPreview() {
  return (
    <section id="screens" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Key screens at a glance</h2>
        <p className="mt-2 text-white/70 max-w-2xl">An intuitive UI that maps to the four core screens and flows you described.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScreenCard title="Document List" subtitle="Upload, version, download">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-md bg-sky-600/90 hover:bg-sky-600 text-white px-3 py-1.5 text-xs font-medium">
                  <UploadCloud size={14} /> Upload
                </button>
                <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-1.5 text-xs font-medium ring-1 ring-white/15">
                  <Layers size={14} /> Re-upload version
                </button>
              </div>
              <div className="text-xs text-white/60">Showing 25 documents</div>
            </div>
            <div className="mt-3 divide-y divide-white/10">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-sky-300" />
                    <div>
                      <div className="text-sm text-white">Vendor Agreement v{i}</div>
                      <div className="text-[11px] text-white/60">Uploaded by Jane • 2025-10-0{i} • v{i}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-xs text-white/80 hover:text-white">Impacts</button>
                    <button className="inline-flex items-center gap-1 rounded bg-white/10 hover:bg-white/15 px-2 py-1 text-xs text-white"><Download size={12}/> Download</button>
                  </div>
                </div>
              ))}
            </div>
          </ScreenCard>

          <ScreenCard title="Dashboard" subtitle="Recently modified">
            <div className="space-y-2">
              {[1,2,3].map((i) => (
                <div key={i} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <Activity className="h-4 w-4 text-emerald-300" />
                    <div>
                      <div className="text-sm text-white">Policy Update v{i}</div>
                      <div className="text-[11px] text-white/60">Modified today • {i} impacted docs</div>
                    </div>
                  </div>
                  <button className="text-xs text-sky-300 hover:underline">View details</button>
                </div>
              ))}
            </div>
          </ScreenCard>

          <ScreenCard title="Modification Details" subtitle="Diff + impacted docs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="rounded-md border border-white/10 bg-black/40 p-2">
                <div className="text-xs text-white/60 mb-1">Text differences</div>
                <pre className="whitespace-pre-wrap text-xs text-white/90">
- The vendor may terminate with 30 days notice.
+ The vendor may terminate with 45 days notice.
                </pre>
              </div>
              <div className="space-y-2">
                {["Unread","Claimed","Resolved"].map((status, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                    <div className="text-sm text-white">MSA Section 4 references termination period</div>
                    <select className="rounded bg-black/50 text-xs text-white/90 border border-white/10 px-2 py-1">
                      <option>{status}</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </ScreenCard>

          <ScreenCard title="Document Impacts" subtitle="Impacts to this doc">
            <div className="space-y-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  <div>
                    <div className="text-sm text-white">Change in Vendor Agreement v{i}</div>
                    <div className="text-[11px] text-white/60">Potential mismatch with Data Processing Addendum</div>
                  </div>
                  <select className="rounded bg-black/50 text-xs text-white/90 border border-white/10 px-2 py-1">
                    <option>Unread</option>
                    <option>Claimed</option>
                    <option>Resolved</option>
                  </select>
                </div>
              ))}
            </div>
          </ScreenCard>
        </div>
      </div>
    </section>
  );
}
