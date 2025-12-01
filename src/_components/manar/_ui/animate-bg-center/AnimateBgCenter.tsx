// components/AnimateBackgroundCenter.tsx
interface AnimateBackgroundCenterProps {
  children: React.ReactNode
  bgClass?: string // Tailwind background color class, e.g., "bg-cyan-100"
}

export default function AnimateBackgroundCenter({ children, bgClass }: AnimateBackgroundCenterProps) {
  return (
    <div className="relative overflow-hidden w-full group">
      {/* Background sliding from center to top */}
      <div className={`absolute inset-0 top-1/2 -translate-y-1/2 group-hover:-translate-y-full transition-transform duration-500 ease-in-out ${bgClass} [@media(pointer:coarse)]:translate-y-0`}></div>

      {/* Background sliding from center to bottom */}
      <div className={`absolute inset-0 bottom-1/2 translate-y-1/2 group-hover:translate-y-full transition-transform duration-500 ease-in-out ${bgClass} [@media(pointer:coarse)]:translate-y-0`}></div>

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
