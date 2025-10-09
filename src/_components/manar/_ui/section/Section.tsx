import React from 'react'

export default function Section({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <section className={`container py-16 ${className}`}>{children}</section>
}
