import type { Group } from '@entities/group'
import { cacheClient } from '@shared/lib/api/cacheClient'

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
    const groupsText = await cacheClient.get<string>('groups:all')
    const groups = JSON.parse(groupsText) as Group[]
    return groups
  },
}
