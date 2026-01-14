export type Event = {
  id: string
  status: EventStatus
  description: EventDescription
  title: string
  date: string
  location: string
  attendees: string
  action: string
}

export type EventStatus = 'upcoming' | 'past'
export type EventDescription = '다가오는 이벤트' | '지난 이벤트'
