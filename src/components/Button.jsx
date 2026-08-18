export default function Button({ children, className = '', href = '#dashboard', ...props }) {
  return (
    <a
      href={href}
      className={[
        'inline-flex min-h-11 items-center justify-center rounded-lg',
        'border border-[#635bff] bg-[#635bff] px-5',
        'text-sm font-semibold text-white',
        'transition duration-200',
        'hover:-translate-y-0.5 hover:bg-[#5149e8]',
        'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#635bff]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </a>
  )
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="ml-1">
      →
    </span>
  )
}
