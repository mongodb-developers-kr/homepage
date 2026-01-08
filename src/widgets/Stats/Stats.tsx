import { Calendar, Users } from 'lucide-react'

const stats = [
  {
    icon: <Users className="text-[#00ed64]" size={24} />,
    value: '300+',
    label: '회원',
  },
  {
    icon: <Calendar className="text-[#00ed64]" size={24} />,
    value: '1',
    label: '이벤트',
  },
]

export const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#011621]/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#00ed64]/10 rounded-xl flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-xl font-bold mb-1">
                {stat.value} {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
