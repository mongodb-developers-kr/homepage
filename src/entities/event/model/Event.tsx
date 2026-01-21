export type Event = {
  id: string
  category: EventCategory
  type: EventType
  status: EventStatus
  statusText: (typeof EventDescription)[EventStatus]
  title: string
  date: string
  time: string
  location: string
  description: string
  attendees: string
  action: action
  link: string
  createdAt: string,
  updatedAt: string,
}

export type EventStatus = 'preparation' | 'open' | 'closed'
export const EventDescription: Record<EventStatus, string> = {
  preparation: '준비중',
  open: '다가오는 이벤트',
  closed: '지난 이벤트',
}
export type action = 
| 'MeetUp 페이지 바로가기' 
| 'MongoDB University 강의 보기' 
| '후기 보기 (Slack)' 
| '참여하기'
export type EventCategory = 'meetup' | 'skillsSession'| 'ama' | 'other' 
export type EventType = 'inPerson' | 'online' | 'hybrid'

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