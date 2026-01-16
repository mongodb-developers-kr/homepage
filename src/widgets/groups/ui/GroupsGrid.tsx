import type { Group } from '@entities/group'
import { groupsApi } from '@entities/group/api/groupApi'
import { cn } from '@shared/lib/utils'
import { Button } from '@shared/ui/Button'
import { Card } from '@shared/ui/Card'
import { useEffect, useState } from 'react'

export const GroupsGrid = () => {
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true)
        const data = await groupsApi.getAll()
        setGroups(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : '데이터를 불러오는데 실패했습니다.',
        )
      } finally {
        setLoading(false)
      }
    }

    fetchGroups()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-8 text-text-primary">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-400">로딩 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-2">오류가 발생했습니다</p>
        <p className="text-gray-400 text-sm">{error}</p>
      </div>
    )
  }

  if (groups.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        표시할 그룹이 없습니다.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group: Group) => (
        <Card
          key={group.id}
          className="bg-bg-secondary border-border text-text-primary transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
        >
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
            {group.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{group.title}</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {group.description}
          </p>
          {/* <div className="text-xs text-gray-500 font-medium mb-6">
            참여 인원: {group.membersCount} 명
          </div> */}
          <Button
            variant="outline"
            className={cn(
              'w-full border-border text-text-primary hover:bg-primary hover:text-bg-primary hover:border-primary',
              group.status === 'active' ? 'text-primary' : 'text-gray-500',
            )}
            onClick={() => {
              if (group.link) {
                window.open(group.link, '_blank', 'noopener,noreferrer')
              }
            }}
          >
            {group.buttonText || 'Slack & MeetUp 참여하기'}
          </Button>
        </Card>
      ))}
    </div>
  )
}
