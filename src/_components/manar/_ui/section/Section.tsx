import React from 'react'

export default function Section({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <section className={`container md:py-16 px-6 md:px-0 py-8 ${className}`}>{children}</section>
}
