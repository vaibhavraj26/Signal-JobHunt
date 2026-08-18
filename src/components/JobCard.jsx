import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import MatchBreakdown from './MatchBreakdown'

export default function JobCard({ job }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={() => setOpen((v) => !v)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      whileHover={reduce ? undefined : { y: -3 }}
      whileTap={reduce ? undefined : { scale: 0.998 }}
      layout
      className={[
        'group w-full border bg-white p-4 text-left sm:p-5',
        'transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635bff]',
        open
          ? 'border-[#bdbdb4] shadow-[0_2px_12px_rgba(17,17,17,0.06)]'
          : 'border-[#dfdfd8] hover:border-[#bdbdb4]',
      ].join(' ')}
      aria-expanded={open}
      aria-label={`${job.title} at ${job.company}, ${job.match}% match. ${open ? 'Collapse' : 'Expand'} details.`}
    >
      {/* Top row: title + match */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#111111]">{job.title}</p>
          <p className="mt-1 text-xs text-[#686863]">{job.company}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span
            className={[
              'inline-flex items-center gap-1 text-sm font-bold',
              job.match >= 90 ? 'text-[#17834b]' : 'text-[#635bff]',
            ].join(' ')}
          >
            {job.match}%
            <span className="text-xs font-normal text-[#686863]">match</span>
          </span>
          {/* Bookmark icon */}
          <span
            className="flex h-7 w-7 items-center justify-center text-[#c0c0b8] transition-colors group-hover:text-[#686863]"
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Metadata row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#686863]">
        <span className="border border-[#eeeee8] px-2 py-0.5">{job.location}</span>
        <span className="border border-[#eeeee8] px-2 py-0.5">{job.type}</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden text-[#9c9c93] sm:inline">{job.tags.join(' · ')}</span>
      </div>

      {/* Expandable breakdown */}
      {open && <MatchBreakdown breakdown={job.breakdown} />}

      <span className="sr-only">
        {open ? 'Hide match details' : 'Show match details'}
      </span>
    </motion.button>
  )
}
