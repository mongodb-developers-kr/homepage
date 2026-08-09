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

export const upcomingEvents = events.filter((event) => event.status !== 'closed')

/** public/ 에 있는 파일을 base 경로를 포함한 URL 로 바꿉니다. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type {
  EventContent,
  GroupContent,
  PartnerContent,
  QnAContent,
  SiteContent,
}
