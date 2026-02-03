import type { Group } from '@entities/group'
import { cacheClient } from '@shared/lib/api/cacheClient'
import { createElement } from 'react'
import { FiMapPin, FiUser } from 'react-icons/fi'

/**
 * API 응답 타입 (서버에서 받는 원본 형식)
 */
type GroupApiResponse = {
  id: number
  title: string
  description: string
  membersCount: number
  type: 'regional' | 'special'
  status: 'active' | 'inactive' | 'closed'
  link?: string | null
  createdAt: string
  updatedAt: string
}

/**
 * Groups API 엔드포인트
 */
export const groupsApi = {
  /**
   * 모든 그룹 목록을 가져옵니다.
   *
   * @returns Promise<Group[]> - 그룹 배열
   */
  getAll: async (): Promise<Group[]> => {
    // API 응답은 이미 JSON 배열이므로 직접 받습니다
    const apiGroups = await cacheClient.get<GroupApiResponse[]>('groups')

    return apiGroups.map(
      (apiGroup): Group => ({
        id: String(apiGroup.id),
        title: apiGroup.title,
        description: apiGroup.description,
        membersCount: apiGroup.membersCount,
        type: apiGroup.type,
        status: apiGroup.status,
        createdAt: apiGroup.createdAt,
        updatedAt: apiGroup.updatedAt,
        link: apiGroup.link || undefined,
        icon: createElement(apiGroup.type === 'regional' ? FiMapPin : FiUser, {
          size: 20,
        }),
        buttonText:
          apiGroup.status === 'active' ? 'Slack 커뮤니티 참여하기' : undefined,
      }),
    )
  },
}
