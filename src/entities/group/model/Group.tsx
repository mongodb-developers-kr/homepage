import type { GroupContent } from '@shared/content/schema'

export type Group = GroupContent
export type GroupType = Group['type']
export type GroupStatus = Group['status']

export const GroupStatusText: Record<GroupStatus, string> = {
  active: '운영 중',
  inactive: '준비 중',
  closed: '종료',
}
