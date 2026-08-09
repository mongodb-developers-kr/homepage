/**
 * content/*.json 의 스키마 정의입니다.
 *
 * 이 파일이 콘텐츠와 화면 사이의 계약입니다.
 * 여기를 바꾸면 content/ 의 JSON 도 함께 바뀌어야 하고,
 * 그 반대도 마찬가지입니다. (빌드 시 자동으로 검증됩니다.)
 */
import { z } from 'zod'

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM-DD 형식이어야 합니다')

const uniqueIds = <T extends { id: string }>(items: T[], ctx: z.RefinementCtx) => {
  const seen = new Set<string>()
  items.forEach((item, index) => {
    if (seen.has(item.id)) {
      ctx.addIssue({
        code: 'custom',
        path: [index, 'id'],
        message: `id "${item.id}" 가 중복되었습니다`,
      })
    }
    seen.add(item.id)
  })
}

export const eventCategories = ['meetup', 'skillsSession', 'ama', 'other'] as const
export const eventTypes = ['inPerson', 'online', 'hybrid'] as const
export const eventStatuses = ['preparation', 'open', 'closed'] as const

export const eventSchema = z.object({
  id: z.string().min(1),
  category: z.enum(eventCategories),
  type: z.enum(eventTypes),
  status: z.enum(eventStatuses),
  title: z.string().min(1),
  date: isoDate,
  time: z.string().min(1),
  location: z.string().min(1),
  /** 카드에 불릿으로 표시됩니다. 한 줄에 한 항목씩 적어주세요. */
  description: z.array(z.string().min(1)).min(1),
  attendees: z.number().int().nonnegative().optional(),
  link: z.url().optional(),
  /** 버튼에 그대로 노출되는 문구. 어디로 가는지 드러나게 적어주세요. */
  linkLabel: z.string().min(1).optional(),
  createdAt: isoDate,
  updatedAt: isoDate,
})

export const eventsSchema = z
  .array(eventSchema)
  .superRefine((events, ctx) => {
    uniqueIds(events, ctx)
    events.forEach((event, index) => {
      if (event.link && !event.linkLabel) {
        ctx.addIssue({
          code: 'custom',
          path: [index, 'linkLabel'],
          message: 'link 가 있으면 linkLabel 도 있어야 합니다',
        })
      }
    })
  })

export const groupSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.enum(['regional', 'special']),
  status: z.enum(['active', 'inactive', 'closed']),
  membersCount: z.number().int().nonnegative().optional(),
  link: z.url().optional(),
  linkLabel: z.string().min(1).optional(),
})

export const groupsSchema = z.array(groupSchema).superRefine(uniqueIds)

export const qnaSchema = z.object({
  id: z.string().min(1),
  question: z.string().min(1),
  /** 빈 문자열은 문단 사이의 여백으로 렌더링됩니다. */
  answer: z.array(z.string()).min(1),
})

export const qnaListSchema = z.array(qnaSchema).superRefine(uniqueIds)

export const partnerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  /** public/ 기준 상대 경로. 예) partners/acme-logo.png */
  logo: z.string().regex(/^[^/].*\.(png|svg|jpg|jpeg|webp)$/i, {
    message: 'public/ 기준 상대 경로여야 합니다 (예: partners/acme-logo.png)',
  }),
  url: z.url().optional(),
  updatedAt: isoDate.optional(),
})

export const partnersSchema = z.array(partnerSchema).superRefine(uniqueIds)

export const siteSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  url: z.url(),
  memberCount: z.number().int().nonnegative(),
  memberCountNote: z.string().min(1),
  links: z.object({
    slackJoin: z.url(),
    slackGeneral: z.url(),
    slackQuestions: z.url(),
    github: z.url(),
    speakerForm: z.url(),
    questionForm: z.url(),
    partnershipForm: z.url(),
    codeOfConduct: z.url(),
  }),
  resources: z
    .array(z.object({ label: z.string().min(1), href: z.url() }))
    .min(1),
})

export type EventContent = z.infer<typeof eventSchema>
export type GroupContent = z.infer<typeof groupSchema>
export type QnAContent = z.infer<typeof qnaSchema>
export type PartnerContent = z.infer<typeof partnerSchema>
export type SiteContent = z.infer<typeof siteSchema>

export const contentSchemas = {
  'events.json': eventsSchema,
  'groups.json': groupsSchema,
  'qna.json': qnaListSchema,
  'partners.json': partnersSchema,
  'site.json': siteSchema,
} as const
