'use client'

import moment from 'moment-timezone'
import { useEffect } from 'react'

export const useEnhanceCalendar = (byDate: Map<string, any>, selectedMonth: string | null, timezone: string = 'Asia/Riyadh') => {
  useEffect(() => {
    // Wait a tick for calendar to render
    const timeout = setTimeout(() => {
      const dayButtons = document.querySelectorAll<HTMLElement>('[data-slot="grid-wrapper"] [data-react-aria-pressable="true"]')

      dayButtons.forEach((el) => {
        const label = el.getAttribute('aria-label') || ''
        const match = label.match(/(\w+), (\w+) (\d+), (\d{4})/)

        if (!match) return

        const [, , monthName, day, year] = match
        const dateStr = moment.tz(`${monthName} ${day}, ${year}`, 'MMMM D, YYYY', timezone).format('YYYY-MM-DD')

        // ✅ Mark event dates
        if (byDate.has(dateStr)) {
          el.classList.add('event-date')
        }

        // ✅ Make all dates interactive
        el.style.cursor = 'pointer'
        el.style.pointerEvents = 'auto'
        el.style.textDecoration = 'none'
      })
    }, 100)

    return () => clearTimeout(timeout)
  }, [byDate, selectedMonth, timezone])
}
