export type Group = {
  id: string
  icon?: React.ReactNode
  type: GroupType
  status: GroupStatus
  title: string
  description: string
  membersCount: number
  buttonText?: string
  link?: string
  createdAt: string
  updatedAt: string
}

export type GroupType = 'regional' | 'special'
export type GroupStatus = 'active' | 'inactive' | 'closed'
