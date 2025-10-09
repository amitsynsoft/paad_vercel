'use client'

import React, { useState } from 'react'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, Button, Card, Calendar, Divider } from '@heroui/react'
import { CalendarIcon } from 'lucide-react'
import moment from 'moment'
import { useThemeStore } from '@/zustund-store/useThemeMode.store'

const eventsData = [
  {
    id: 1,
    date: '2025-11-15',
    title: 'Workshop day',
    location: 'Al Ain',
    tag: 'Workshop',
    image: '/images/event1.jpg',
    time: '19:00',
  },
  {
    id: 2,
    date: '2025-11-18',
    title: 'Art Exhibition',
    location: 'Abu Dhabi',
    tag: 'Exhibition',
    image: '/images/event2.jpg',
    time: '17:30',
  },
]

export default function CalendarDrawer() {
  const { mode } = useThemeStore()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null)

  const selectedEvents = selectedDate ? eventsData.filter((e) => moment(e.date).isSame(selectedDate, 'day')) : []

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6  right-6 z-50">
        <div className="flex flex-col items-center justify-center p-3 gap-4 bg-background rounded-full text-primary border-2 border-primary cursor-pointer" onClick={() => setIsOpen(true)}>
          <span className="text-sm font-bold leading-1">{moment()?.format('MMM')?.toUpperCase()}</span>
          <span className="text-xl font-extrabold leading-1">{moment().format('DD')}</span>
        </div>

        <Drawer isOpen={isOpen} onOpenChange={setIsOpen} size="sm" placement="right" className={`rounded-none bg-background font-abcdiatype manar-${mode}`} hideCloseButton>
          <DrawerContent className="p-0 border-l-2 border-primary">
            {(onClose) => (
              <>
                <DrawerHeader className="flex justify-between items-center px-2">
                  {/* Todo: remove hardcode */}
                  <h2 className="text-lg font-semibold text-primary">Event Calendar</h2>
                </DrawerHeader>

                <DrawerBody className="overflow-y-auto p-0">
                  {/* HeroUI Calendar with custom styles */}
                  <Calendar
                    aria-label="Date (firstDayOfWeek)"
                    firstDayOfWeek="mon"
                    classNames={{
                      base: `w-full shadow-none rounded-none`,
                      content: 'w-full',
                      title: 'text-primary font-bold ',
                      headerWrapper: 'bg-background w-full ',
                      gridWrapper: 'pb-0',
                      gridHeaderRow: 'w-full px-0 bg-background',
                      gridHeaderCell: 'w-full text-primary font-bold',
                      gridBody: 'bg-background',
                      gridBodyRow: 'w-full flex',
                      cell: 'w-full flex item-center justify-center',
                      cellButton: 'data-[hover=true]:text-primary hover:bg-background',
                    }}
                    onChange={(date) => setSelectedDate(moment(date as any))}
                  />

                  <div className="my-4 border-1 border-primary"></div>

                  {/* Event List */}
                  <div className="mt-4 space-y-4">
                    {selectedDate && selectedEvents.length === 0 && <p className="text-center text-primary text-sm">No events on {selectedDate.format('DD MMMM YYYY')}</p>}

                    {selectedEvents.map((event) => (
                      <Card key={event.id} className="bg-background shadow-none overflow-hidden">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
                          <p className="text-sm text-primary">{event.location}</p>
                          <p className="text-sm text-primary">{event.tag}</p>
                          <p className="text-sm text-primary">{event.time}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
