import { motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'
import JobCard from './JobCard'
import { jobs } from '../data/jobs'
import { ease } from './Reveal'

const sidebarItems = [
  { label: 'Overview', icon: 'grid' },
  { label: 'Matches', icon: 'zap', active: true, dot: true },
  { label: 'Saved', icon: 'bookmark' },
  { label: 'Applications', icon: 'folder', href: '#applications' },
  { label: 'Settings', icon: 'settings' },
]

function SidebarIcon({ icon }) {
  const icons = {
    grid: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    zap: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    bookmark: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
    folder: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    settings: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  }
  return <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center">{icons[icon]}</span>
}

/* Desktop sidebar */
function Sidebar() {
  return (
    <aside className="hidden border-r border-[#dfdfd8] bg-[#fbfbf9] p-5 lg:block">
      <Logo />
      <div className="mt-10 space-y-0.5 text-[13px]">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9c9c93]">
          Workspace
        </p>
        {sidebarItems.map((item) => (
          <a
            href={item.href || '#dashboard'}
            key={item.label}
            className={[
              'flex items-center justify-between gap-2 px-3 py-2.5 transition-colors',
              item.active
                ? 'bg-[#f0efff] font-semibold text-[#635bff]'
                : 'text-[#686863] hover:bg-[#f1f1ed]',
            ].join(' ')}
          >
            <span className="flex items-center gap-2.5">
              <SidebarIcon icon={item.icon} />
              {item.label}
            </span>
            {item.dot && (
              <span className="h-1.5 w-1.5 rounded-full bg-[#635bff]" aria-label="New items" />
            )}
          </a>
        ))}
      </div>
    </aside>
  )
}

/* Mobile compact toolbar */
function MobileToolbar() {
  return (
    <div className="flex items-center gap-1 overflow-x-auto border-b border-[#dfdfd8] px-4 py-2 text-[11px] lg:hidden">
      {sidebarItems.map((item) => (
        <a
          href={item.href || '#dashboard'}
          key={item.label}
          className={[
            'flex shrink-0 items-center gap-1.5 px-3 py-1.5 transition-colors',
            item.active
              ? 'bg-[#f0efff] font-semibold text-[#635bff]'
              : 'text-[#686863]',
          ].join(' ')}
        >
          <SidebarIcon icon={item.icon} />
          {item.label}
          {item.dot && (
            <span className="h-1 w-1 rounded-full bg-[#635bff]" aria-label="New items" />
          )}
        </a>
      ))}
    </div>
  )
}

export default function DashboardPreview() {
  const reduce = useReducedMotion()

  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="overflow-hidden border border-[#cfcfc8] bg-white shadow-[0_18px_60px_rgba(17,17,17,0.07)]"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#dfdfd8] px-4 py-3 text-[10px] text-[#686863] sm:px-6">
          <span className="font-semibold tracking-[0.16em] text-[#111111]">
            SIGNAL / DEMO WORKSPACE
          </span>
          <span>Example search</span>
        </div>

        <div className="grid lg:grid-cols-[200px_1fr]">
          {/* Desktop sidebar */}
          <Sidebar />

          {/* Mobile toolbar */}
          <div className="lg:hidden">
            <MobileToolbar />
          </div>

          {/* Main content */}
          <div className="min-w-0 p-4 sm:p-7">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#111111]">
                  Your signal
                </h2>
                <p className="mt-1 text-xs text-[#686863]">
                  7 opportunities worth your time
                </p>
              </div>
              <span className="hidden items-center gap-2 border border-[#dfdfd8] px-3 py-2 text-[11px] text-[#686863] sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#17834b]" aria-hidden="true" />
                Last updated just now
              </span>
            </div>

            {/* Filter tags + search */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="border border-[#635bff]/30 bg-[#f4f3ff] px-3 py-1.5 text-[11px] font-medium text-[#635bff]">
                Frontend
              </span>
              <span className="border border-[#dfdfd8] px-3 py-1.5 text-[11px] text-[#686863]">
                Remote
              </span>
              <span className="border border-[#dfdfd8] px-3 py-1.5 text-[11px] text-[#686863]">
                India
              </span>
              <span className="ml-auto hidden items-center gap-2 border border-[#dfdfd8] px-3 py-1.5 text-[11px] text-[#9c9c93] sm:inline-flex">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                Search jobs
                <kbd className="ml-4 border border-[#dfdfd8] px-1.5 py-0.5 font-mono text-[10px]">/</kbd>
              </span>
            </div>

            {/* Job cards */}
            <div className="space-y-3">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.45, ease }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
