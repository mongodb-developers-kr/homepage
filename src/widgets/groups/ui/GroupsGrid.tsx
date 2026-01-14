import type { Group } from '@entities/group'
import { groupsApi } from '@entities/group/api/groupApi'
import { Button } from '@shared/ui/Button'
import { Card } from '@shared/ui/Card'
import { FiMapPin, FiUser } from 'react-icons/fi'

export const GroupsGrid = async () => {
  const groups = await groupsApi.getAll()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group: Group) => (
        <Card
          key={group.id}
          className="bg-bg-secondary border-border text-text-primary transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
        >
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
            {group.type === 'regional' ? (
              <FiMapPin size={20} />
            ) : (
              <FiUser size={20} />
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{group.title}</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {group.description}
          </p>
          <div className="text-xs text-gray-500 font-medium mb-6">
            참여 인원: {group.membersCount} 명
          </div>
          <Button
            variant="outline"
            className="w-full border-border text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary"
          >
            {group.status === 'active' ? (
              <span className="text-primary">{group.buttonText}</span>
            ) : group.status === 'closed' ? (
              <span className="text-gray-500">마감 완료</span>
            ) : (
              <span className="text-gray-500">활동 중지</span>
            )}
          </Button>
        </Card>
      ))}
    </div>
  )
}
