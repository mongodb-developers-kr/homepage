import type { EventContent } from '@shared/content/schema'

export type Event = EventContent
export type EventStatus = Event['status']
export type EventCategory = Event['category']
export type EventType = Event['type']

export const EventDescription: Record<EventStatus, string> = {
  preparation: '준비중',
  open: '다가오는 이벤트',
  closed: '지난 이벤트',
}

export const EventTypeText: Record<EventType, string> = {
  inPerson: '오프라인',
  online: '온라인',
  hybrid: '하이브리드',
}

export const EventCategoryText: Record<EventCategory, string> = {
  meetup: '밋업',
  skillsSession: '기술 세션',
  ama: 'AMA',
  other: '기타',
}
