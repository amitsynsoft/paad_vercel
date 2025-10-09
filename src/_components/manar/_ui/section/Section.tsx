import React from 'react'

export default function Section({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <section className={`container md:py-16 py-8 ${className}`}>{children}</section>
}
