import Logo from './Logo'

const links = [
  { label: 'Product', href: '#dashboard' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Applications', href: '#applications' },
  { label: 'Privacy', href: '#footer' },
]

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-[#dfdfd8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        {/* Left */}
        <div>
          <Logo />
          <p className="mt-3 text-sm text-[#686863]">
            A smarter workspace for your next opportunity.
          </p>
        </div>

        {/* Right — links + copyright */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#686863]">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-[#111111]"
            >
              {label}
            </a>
          ))}
          <span>© 2026 Signal</span>
        </div>
      </div>
    </footer>
  )
}
