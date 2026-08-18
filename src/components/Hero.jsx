import { motion, useReducedMotion } from 'framer-motion'
import Button, { Arrow } from './Button'
import { ease } from './Reveal'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pb-20 "
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <p className="mb-6 text-[11px] font-bold tracking-[0.22em] text-[#635bff]">
          AI JOB SEARCH, WITHOUT THE NOISE
        </p>

        {/* Headline */}
        <h1 className="max-w-2xl text-[2.75rem] font-semibold leading-[0.96] tracking-[-0.055em] text-[#111111] sm:text-[4.25rem] lg:text-[4.5rem]">
          Stop searching.
          <br />
          <span className="text-[#635bff]">Start finding.</span>
        </h1>

        {/* Supporting copy */}
        <p className="mt-7 max-w-xl text-base leading-7 text-[#686863] sm:text-lg sm:leading-8">
          Signal filters the noise from your job search and surfaces the
          opportunities that actually fit your skills, goals, and experience.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button>
            Find your signal <Arrow />
          </Button>
          <span className="text-xs text-[#686863]">No credit card required.</span>
        </div>
      </motion.div>
    </section>
  )
}
