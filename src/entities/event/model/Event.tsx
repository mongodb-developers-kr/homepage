export type Event = {
  id: string
  status: EventStatus
  description: EventDescription
  title: string
  date: string
  location: string
  attendees: string
  action: action
  link: string
  createdAt: string
  updatedAt: string
}

export type EventStatus = 'preparation' | 'open' | 'closed'
export type EventDescription = '다가오는 이벤트' | '지난 이벤트'
export type action =
  | 'MeetUp 페이지 바로가기'
  | '참여하기'
  | '후기 보기 (Slack)'
  | 'MongoDB University 강의 보기'
