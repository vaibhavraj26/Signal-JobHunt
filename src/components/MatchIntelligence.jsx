import { motion } from 'framer-motion'
import Reveal, { ease } from './Reveal'
import { Arrow } from './Button'
import { matchCriteria } from '../data/matchCriteria'

export default function MatchIntelligence() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-start lg:px-10">
      {/* Left — copy */}
      <Reveal>
        <p className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#635bff]">
          MATCH INTELLIGENCE
        </p>
        <h2 className="max-w-lg text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-[2.75rem] lg:text-[3rem]">
          Don&apos;t just see a match. Understand it.
        </h2>
        <p className="mt-6 max-w-md text-base leading-7 text-[#686863]">
          Signal shows why an opportunity fits before you spend time applying.
        </p>
      </Reveal>

      {/* Right — match panel */}
      <Reveal delay={0.1}>
        <div className="border border-[#dfdfd8] bg-white p-5 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-[#111111]">
                Senior Frontend Engineer
              </p>
              <p className="mt-1 text-xs text-[#686863]">
                Acdyon Technologies · Remote · India
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-semibold tabular-nums text-[#17834b]">94%</p>
              <p className="text-[10px] uppercase tracking-widest text-[#686863]">
                match
              </p>
            </div>
          </div>

          {/* Score bar */}
          <div className="mt-7 h-1.5 bg-[#f1f1ed]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '94%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="h-full bg-[#17834b]"
            />
          </div>

          {/* Criteria */}
          <div className="mt-7 space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9c9c93]">
              Why this matches you
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {matchCriteria.map(({ text, met }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, ease }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span
                    className={[
                      'flex h-5 w-5 items-center justify-center border text-xs',
                      met
                        ? 'border-[#17834b] text-[#17834b]'
                        : 'border-[#dfdfd8] text-[#9c9c93]',
                    ].join(' ')}
                  >
                    {met ? '✓' : '○'}
                  </span>
                  <span className={met ? 'text-[#111111]' : 'text-[#9c9c93]'}>
                    {text}
                  </span>
                  {!met && (
                    <span className="text-[10px] text-[#9c9c93]">Missing</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#footer"
            className="mt-8 inline-flex text-sm font-semibold text-[#635bff] transition-colors hover:text-[#5149e8] focus-visible:outline-2 focus-visible:outline-[#635bff]"
          >
            View opportunity <Arrow />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
