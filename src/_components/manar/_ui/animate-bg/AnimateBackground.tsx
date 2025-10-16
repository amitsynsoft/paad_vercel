// components/AnimateBackground.tsx
interface AnimateBackgroundProps {
  children: React.ReactNode
  bgClass?: string // Tailwind background color class, e.g., "bg-cyan-100"
}

export default function AnimateBackground({ children, bgClass }: AnimateBackgroundProps) {
  return (
    <div className="relative overflow-hidden w-full group">
      {/* background slide layer */}
      <div className={`absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-all duration-400 ease-in-out ${bgClass} [@media(pointer:coarse)]:translate-y-0`}></div>

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
