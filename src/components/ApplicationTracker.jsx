import { motion } from 'framer-motion'
import Reveal, { ease } from './Reveal'
import { applications } from '../data/applications'

const tabs = ['All', 'Saved', 'Applied', 'Interview', 'Offer']

export default function ApplicationTracker() {
  return (
    <section id="applications" className="border-y border-[#dfdfd8] bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-start lg:px-10">
        {/* Left — copy */}
        <Reveal>
          <p className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#a39eff]">
            APPLICATIONS
          </p>
          <h2 className="max-w-lg text-[2rem] font-semibold leading-tight tracking-[-0.04em] sm:text-[2.75rem] lg:text-[3rem]">
            Keep every application in one place.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/55">
            From saved opportunity to interview, Signal keeps your search moving.
          </p>
        </Reveal>

        {/* Right — application panel */}
        <Reveal delay={0.1}>
          <div className="border border-white/15 bg-white/[0.04] p-4 sm:p-7">
            {/* Panel header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <p className="text-xs font-semibold tracking-[0.16em]">APPLICATIONS</p>
              <span className="text-[10px] text-white/40">Demo workspace</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-5 border-b border-white/10 py-4 text-xs text-white/45">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  className={
                    tab === 'All'
                      ? 'border-b-2 border-[#a39eff] pb-4 text-white'
                      : 'pb-4'
                  }
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Rows */}
            <div>
              {applications.map(({ company, role, status, colorClasses }, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, ease }}
                  className="flex items-center justify-between gap-4 border-b border-white/10 py-5 last:border-0"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{company}</p>
                    <p className="mt-1 text-xs text-white/40">{role}</p>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-1 text-[10px] font-semibold ${colorClasses}`}
                  >
                    {status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
