import type { Group } from '@entities/group'
import { cacheClient } from '@shared/lib/api/cacheClient'

/**
 * API 응답 타입 (Cloudflare KV 가 내려주는 원본 형식)
 */
type GroupApiResponse = {
  id: number | string
  title: string
  description: string
  membersCount?: number
  type: Group['type']
  status: Group['status']
  link?: string | null
  linkLabel?: string | null
}

export const groupsApi = {
  /**
   * 모임 목록을 가져옵니다.
   *
   * 화면은 content/groups.json 으로 먼저 그려지고,
   * 이 호출이 성공했을 때만 최신 데이터로 교체됩니다.
   */
  getAll: async (): Promise<Group[]> => {
    const apiGroups = await cacheClient.get<GroupApiResponse[]>('groups')

    return apiGroups.map((apiGroup) => ({
      id: String(apiGroup.id),
      title: apiGroup.title,
      description: apiGroup.description,
      type: apiGroup.type,
      status: apiGroup.status,
      membersCount: apiGroup.membersCount,
      link: apiGroup.link || undefined,
      linkLabel: apiGroup.linkLabel || undefined,
    }))
  },
}
