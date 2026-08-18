import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export default function MatchBreakdown({ breakdown }) {
  const reduce = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={reduce ? false : { opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="mt-4 border-t border-[#dfdfd8] pt-4">
          {/* Breakdown rows */}
          <div className="space-y-2">
            {breakdown.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-3 text-[11px]">
                <span className="w-20 text-[#686863]">{label}</span>
                <div className="h-1 flex-1 bg-[#f1f1ed]">
                  <motion.div
                    initial={reduce ? false : { width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-[#17834b]"
                  />
                </div>
                <span className="w-8 text-right font-mono text-[#686863]">
                  {value}%
                </span>
              </div>
            ))}
          </div>

          <a
            href="#how-it-works"
            className="mt-4 inline-flex text-[12px] font-semibold text-[#635bff] transition-colors hover:text-[#5149e8]"
            onClick={(e) => e.stopPropagation()}
          >
            Why this matches →
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
