import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'
import Button, { Arrow } from './Button'
import { jobs } from '../data/jobs'
import { ease } from './Reveal'

const sidebarItems = [
  { label: 'Overview', icon: 'grid' },
  { label: 'Matches', icon: 'zap', active: true },
  { label: 'Saved', icon: 'bookmark' },
  { label: 'Applications', icon: 'folder', href: '#applications' },
  { label: 'Profile', icon: 'user' },
  { label: 'Settings', icon: 'settings' },
]

function SidebarIcon({ icon }) {
  const icons = {
    grid: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
    zap: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    bookmark: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>,
    folder: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>,
    user: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    settings: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  }
  return <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center">{icons[icon]}</span>
}

export default function HeroDashboard() {
  const reduce = useReducedMotion()
  const [activeJobId, setActiveJobId] = useState(jobs[0].id)

  const activeJob = jobs.find(j => j.id === activeJobId) || jobs[0]

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pb-20 pt-16 sm:px-8 xl:flex-row xl:items-center xl:px-10 heroScale">
      
      {/* Left: Hero Copy */}
      <motion.div 
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="max-w-xl shrink-0 xl:w-[480px]"
      >
        <h1 className="font-serif text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-[3.5rem] lg:text-[4rem]">
          Stop searching.<br />
          <span className="relative inline-block text-[#111111]">
            Start finding.
            {/* Scribble underline */}
            <svg className="absolute -bottom-4 left-0 w-full text-[#635bff]" viewBox="0 0 286 16" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 13.5C45.5 5.5 124 -1.5 284 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        
        <p className="mt-8 text-base leading-relaxed text-[#686863] sm:text-lg">
          Signal filters the noise from your job search and surfaces the
          opportunities that actually fit your skills, goals, and experience.
        </p>
        
        <div className="mt-8 flex flex-col items-start gap-3">
          <Button className="w-full text-base sm:w-auto">
            Find your signal <Arrow />
          </Button>
          <span className="text-[13px] text-[#9c9c93] sm:ml-1">No credit card required.</span>
        </div>
      </motion.div>

      {/* Right: Dashboard UI */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="w-full flex-1 overflow-hidden rounded-xl border border-[#dfdfd8] bg-white shadow-[0_24px_48px_rgba(17,17,17,0.06)]"
      >
        {/* Top bar */}
        <div className="flex h-14 items-center justify-between border-b border-[#dfdfd8] px-4 sm:px-6">
          <Logo />
          <div className="hidden h-8 w-64 items-center gap-2 rounded-md border border-[#dfdfd8] bg-[#fbfbf9] px-3 text-[11px] text-[#9c9c93] sm:flex">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            Search jobs, companies...
          </div>
          <div className="flex items-center gap-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#686863" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dfdfd8] text-[10px] font-semibold text-[#686863]">
              JD
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-[160px_1fr_230px]">
          {/* Sidebar */}
          <div className="hidden border-r border-[#dfdfd8] bg-[#fbfbf9] px-3 py-6 lg:block">
            <div className="space-y-1 text-[13px]">
              {sidebarItems.map((item) => (
                <a
                  href={item.href || '#dashboard'}
                  key={item.label}
                  className={[
                    'flex items-center gap-2.5 rounded-lg px-3 py-2 transition-colors',
                    item.active
                      ? 'bg-[#f0efff] font-semibold text-[#635bff]'
                      : 'text-[#686863] hover:bg-[#f1f1ed]',
                  ].join(' ')}
                >
                  <SidebarIcon icon={item.icon} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="flex min-w-0 flex-col border-r border-[#dfdfd8]">
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-[#111111]">
                    Your signal
                  </h2>
                  <p className="mt-1 text-xs text-[#686863]">
                    7 opportunities worth your time
                  </p>
                </div>
                <div className="hidden items-center gap-2 lg:flex">
                  <span className="flex items-center gap-1 rounded border border-[#dfdfd8] px-2 py-1 text-[10px] text-[#686863]">Frontend <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                  <span className="flex items-center gap-1 rounded border border-[#dfdfd8] px-2 py-1 text-[10px] text-[#686863]">Remote <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                  <span className="flex items-center gap-1 rounded border border-[#dfdfd8] px-2 py-1 text-[10px] text-[#686863]">India <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                </div>
              </div>

              <div className="space-y-2">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onMouseEnter={() => setActiveJobId(job.id)}
                    onFocus={() => setActiveJobId(job.id)}
                    className={[
                      'group flex w-full items-center justify-between gap-3 rounded-xl border p-2.5 text-left transition-all',
                      activeJobId === job.id
                        ? 'border-[#635bff] bg-[#fcfcff]'
                        : 'border-[#dfdfd8] bg-white hover:border-[#bdbdb4]',
                    ].join(' ')}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${job.logoColor} font-semibold`}>
                        {job.logoInitial}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-[#111111]">{job.title}</p>
                        <p className="mt-0.5 truncate text-[11px] text-[#686863]">{job.company}</p>
                        <p className="mt-0.5 truncate text-[10px] text-[#9c9c93]">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-full border border-[#dfdfd8] px-2 py-0.5 text-[10px] text-[#686863]">
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-[#f4f3ff] px-2.5 py-0.5 text-[10px] font-bold text-[#635bff]">
                        {job.match}% match <Arrow />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Details Panel */}
          <div className="hidden bg-white p-4 lg:block">
            <div className="flex items-center gap-2">
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${activeJob.logoColor} text-[10px] font-semibold`}>
                {activeJob.logoInitial}
              </div>
              <p className="text-[11px] font-semibold text-[#111111]">{activeJob.company}</p>
            </div>
            
            <h3 className="mt-3 text-[15px] font-bold leading-tight text-[#111111]">
              {activeJob.title}
            </h3>
            <p className="mt-1 text-[11px] text-[#686863]">{activeJob.location}</p>

            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#f4f3ff] px-2.5 py-0.5 text-[11px] font-bold text-[#635bff]">
              {activeJob.match}% match
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-[11px] font-bold text-[#111111]">Why this matches you</p>
              {activeJob.matchedSkills?.map(skill => (
                <div key={skill} className="flex items-center gap-2 text-[11px] text-[#111111]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#17834b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              <p className="text-[11px] font-bold text-[#111111]">Missing skills</p>
              {activeJob.missingSkills?.map(skill => (
                <div key={skill} className="flex items-center gap-2 text-[11px] text-[#686863]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9c9c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                  {skill}
                </div>
              ))}
            </div>

            <Button className="mt-6 w-full min-h-9 text-xs">
              View opportunity <Arrow />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
