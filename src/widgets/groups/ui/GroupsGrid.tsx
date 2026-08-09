import type { Group } from '@entities/group'
import { groupsApi } from '@entities/group/api/groupApi'
import { groups as staticGroups } from '@shared/content'
import { cn } from '@shared/lib/utils'
import { Button } from '@shared/ui/Button'
import { Card } from '@shared/ui/Card'
import { useEffect, useState } from 'react'
import { FiMapPin, FiUser } from 'react-icons/fi'

export const GroupsGrid = () => {
  const [groups, setGroups] = useState<Group[]>(staticGroups)

  useEffect(() => {
    let cancelled = false

    groupsApi
      .getAll()
      .then((fresh) => {
        if (!cancelled && fresh.length > 0) setGroups(fresh)
      })
      .catch(() => {
        // API 가 없거나 실패해도 content/groups.json 으로 이미 그려져 있습니다.
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (groups.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">
        준비 중인 모임이 곧 공개됩니다.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group) => (
        <Card
          key={group.id}
          className="flex flex-col bg-bg-secondary border-border text-text-primary transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
        >
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
            {group.type === 'regional' ? (
              <FiMapPin size={20} />
            ) : (
              <FiUser size={20} />
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{group.title}</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
            {group.description}
          </p>
          {group.link && (
            <Button
              variant="outline"
              className={cn(
                'w-full border-border hover:bg-primary hover:text-bg-primary hover:border-primary',
                group.status === 'active' ? 'text-primary' : 'text-gray-500',
              )}
              onClick={() => {
                window.open(group.link, '_blank', 'noopener,noreferrer')
              }}
            >
              {group.linkLabel ?? '모임 페이지 열기'}
            </Button>
          )}
        </Card>
      ))}
    </div>
  )
}
