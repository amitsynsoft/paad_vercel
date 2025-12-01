import React from 'react'

export default function Section({ className = '', children, id }: { className?: string; children?: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={`container md:py-16 px-6 md:px-0 py-8 ${className}`}>
      {children}
    </section>
  )
}
