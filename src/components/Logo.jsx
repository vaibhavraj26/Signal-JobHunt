export default function Logo({ pulse = false, className = '' }) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 font-semibold tracking-tight text-[#111111] ${pulse ? 'signal-pulse' : ''} ${className}`}
      aria-label="Signal home"
    >
      {/* Logo mark — blue thunder sign */}
      <span className="relative flex items-center justify-center text-[#635bff]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </span>
      <span className="text-[17px]">Signal</span>
    </a>
  )
}
