import { motion } from 'framer-motion'
import Reveal, { ease } from './Reveal'

const steps = [
  { number: '1,240', label: 'jobs found', sub: 'Across top job platforms' },
  { number: '183', label: 'match your preferences', sub: 'Based on your skills, location, and goals' },
  { number: '27', label: 'match your experience', sub: 'Filtered for relevant roles' },
  { number: '7', label: 'worth applying to', sub: 'Handpicked for maximum impact', highlight: true },
]

export default function NoiseReduction() {
  return (
    <section
      id="how-it-works"
      className="border-y border-[#dfdfd8] bg-white"
    >
      <div className="mx-auto grid w-[98vw] max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-start lg:px-10">
        {/* Left — copy */}
        <Reveal>
          <p className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#635bff]">
            THE SIGNAL, NOT THE STATIC
          </p>
          <h2 className="max-w-lg text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-[2.75rem] lg:text-[3rem]">
            Your next opportunity shouldn&apos;t be buried in the noise.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[#686863]">
            Signal turns thousands of possibilities into a shortlist you can
            actually act on.
          </p>
        </Reveal>

        {/* Right — filtering funnel */}
        <Reveal delay={0.1}>
          <div className="border border-[#dfdfd8] bg-[#f7f7f4] p-5 sm:p-8">
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#686863]">
              Example search · Frontend · Remote · India
            </p>

            <div>
              {steps.map(({ number, label, sub, highlight }, index) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.45, ease }}
                  className="flex items-center gap-5 border-t border-[#dfdfd8] py-5"
                >
                  <span
                    className={[
                      'font-mono text-2xl tracking-[-0.06em] sm:text-3xl',
                      highlight ? 'text-[#635bff]' : 'text-[#111111]',
                    ].join(' ')}
                  >
                    {number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-medium text-[#111111]">{label}</span>
                    <p className="mt-0.5 text-[11px] text-[#9c9c93]">{sub}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <span className="text-[#c0c0b8]" aria-hidden="true">↓</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
