import Reveal from './Reveal'
import Button, { Arrow } from './Button'

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 lg:px-10">
      <Reveal>
        <p className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#635bff]">
          YOUR NEXT MOVE
        </p>
        <h2 className="mx-auto max-w-2xl text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-[2.75rem] lg:text-[3.5rem]">
          Make your next application count.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#686863]">
          Spend less time searching. More time on the opportunities that matter.
        </p>
        <Button className="mt-8">
          Find your signal <Arrow />
        </Button>
      </Reveal>
    </section>
  )
}
