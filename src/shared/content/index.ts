/**
 * content/*.json 을 화면에서 쓰기 좋은 형태로 노출합니다.
 *
 * 런타임 파싱을 하지 않는 이유: 빌드 시 scripts/validate-content.ts 가
 * 동일한 스키마로 이미 검증하므로, 브라우저 번들에 zod 를 넣지 않습니다.
 */
import eventsJson from '@content/events.json'
import groupsJson from '@content/groups.json'
import partnersJson from '@content/partners.json'
import qnaJson from '@content/qna.json'
import siteJson from '@content/site.json'
import type {
  EventContent,
  GroupContent,
  PartnerContent,
  QnAContent,
  SiteContent,
} from './schema'

export const site = siteJson as unknown as SiteContent
export const groups = groupsJson as unknown as GroupContent[]
export const qnaList = qnaJson as unknown as QnAContent[]
export const partners = partnersJson as unknown as PartnerContent[]

export const events = (eventsJson as unknown as EventContent[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))

/** 오늘 날짜(한국 시간 기준)를 events.json 의 date 와 같은 YYYY-MM-DD 형식으로 돌려줍니다. */
const todayInKorea = () =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())

/**
 * 화면에 표시할 이벤트 상태.
 * 개최일이 지났으면 status 를 'closed' 로 바꾸지 않았더라도 지난 이벤트로 취급합니다.
 * 당일 이벤트는 그날이 끝날 때까지 다가오는 이벤트로 남습니다.
 */
export const getEventStatus = (
  event: EventContent,
  today: string = todayInKorea(),
): EventContent['status'] =>
  event.date < today ? 'closed' : event.status

export const upcomingEvents = events.filter(
  (event) => getEventStatus(event) !== 'closed',
)

/** public/ 에 있는 파일을 base 경로를 포함한 URL 로 바꿉니다. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type {
  EventContent,
  GroupContent,
  PartnerContent,
  QnAContent,
  SiteContent,
}
