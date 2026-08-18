import Logo from './Logo'
import Button, { Arrow } from './Button'

export default function Navbar({ pulse }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfdfd8] bg-[#f7f7f4]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Left — Logo */}
        <Logo pulse={pulse} />

        {/* Center — Nav links (hidden on mobile) */}
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-[#111111] md:flex"
          aria-label="Primary"
        >
          <a className="transition-colors hover:text-[#635bff]" href="#features">
            Features
          </a>
          <a className="transition-colors hover:text-[#635bff]" href="#how-it-works">
            How it works
          </a>
          <a className="transition-colors hover:text-[#635bff]" href="#pricing">
            Pricing
          </a>
          <a className="transition-colors hover:text-[#635bff]" href="#about">
            About
          </a>
        </nav>

        {/* Right — Sign in + CTA */}
        <div className="flex items-center gap-4 text-sm">
          {/* <a
            href="#footer"
            className="hidden text-[#686863] transition-colors hover:text-[#111111] sm:block"
          >
            Sign in
          </a> */}
          <Button className="min-h-9 px-3.5 text-xs sm:min-h-10 sm:px-4 sm:text-sm">
            <span className="hidden sm:inline">Find your signal</span>
            <span className="sm:hidden">Get started</span>
            <Arrow />
          </Button>
        </div>
      </div>
    </header>
  )
}
