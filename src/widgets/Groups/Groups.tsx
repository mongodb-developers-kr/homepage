import { MapPin } from 'lucide-react'
import { Card } from '../../shared/ui/Card'

const groups = [
  {
    icon: <MapPin size={20} />,
    title: 'MUG Korea서울',
    description: '분기 별 Meetup을 진행하는 서울 지역 모임입니다.',
    members: '참여 인원 000명',
  },
]

export const Groups = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#001e2b]">모임</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            지역별 모임을 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <Card key={index} className="bg-[#001e2b] border-none text-white">
              <div className="w-10 h-10 bg-[#00ed64]/10 text-[#00ed64] rounded-lg flex items-center justify-center mb-6">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{group.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {group.description}
              </p>
              <div className="text-xs text-gray-500 font-medium">
                {group.members}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
