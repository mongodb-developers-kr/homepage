import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { cn } from '@shared/lib/utils'

interface QnAItem {
  question: string
  answer: string | string[]
}

const qnaData: QnAItem[] = [
  {
    question: 'MongoDB Developers KR은 어떤 커뮤니티인가요?',
    answer: [
      'MongoDB Developers KR은',
      'MongoDB를 사용하거나 관심 있는 개발자들이 모여',
      '실무 경험, 학습 내용, 고민을 나누는 개발자 커뮤니티입니다.',
      '',
      '정기 밋업과 기술 세션을 중심으로',
      '서로의 경험을 공유하는 것을 목표로 하고 있습니다.',
    ],
  },
  {
    question: 'MongoDB를 이미 쓰고 있어야만 참여할 수 있나요?',
    answer: [
      '아닙니다.',
      '이미 MongoDB를 사용 중인 분들뿐만 아니라,',
      '도입을 고민 중이거나 학습 단계에 있는 분들도 환영합니다.',
      '',
      '실무 경험과 학습 과정이 자연스럽게 섞여 있는 커뮤니티입니다.',
    ],
  },
  {
    question: '커뮤니티에서는 주로 어떤 활동을 하나요?',
    answer: [
      '• 정기 밋업 및 기술 세션',
      '• MongoDB 관련 경험 공유',
      '• 커뮤니티 구성원 간의 질문과 정보 교류',
      '',
      '위와 같은 활동을 중심으로 운영되고 있습니다.',
    ],
  },
  {
    question: '커뮤니티 운영은 누가 하나요?',
    answer: [
      'MongoDB Developers KR은',
      '커뮤니티 리더와 운영진을 중심으로 자발적으로 운영되는',
      '개발자 커뮤니티입니다.',
      '',
      'MongoDB Korea 팀과도 소통하며',
      '커뮤니티에 도움이 되는 방향을 함께 고민하고 있습니다.',
      '',
      '(※ 모든 활동은 커뮤니티 주도로 진행됩니다.)',
    ],
  },
  {
    question: '행사나 밋업은 얼마나 자주 열리나요?',
    answer: [
      '정기 밋업은 분기 단위로 진행하는 것을 목표로 하고 있으며,',
      '그 외에도 주제별 기술 세션이나',
      '비정기적인 커뮤니티 이벤트가 열릴 수 있습니다.',
    ],
  },
  {
    question: '어떻게 참여하면 되나요?',
    answer: [
      'Slack 커뮤니티 참여를 통해',
      '밋업 안내, 커뮤니티 소식, 논의에 함께하실 수 있습니다.',
      '',
      '홈페이지 상단의 Slack 커뮤니티 참여하기 버튼을 통해',
      '바로 참여하실 수 있습니다.',
    ],
  },
]

export const QnAList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {qnaData.map((item, index) => {
        const isOpen = openIndex === index
        const answerArray = Array.isArray(item.answer)
          ? item.answer
          : [item.answer]

        return (
          <div
            key={index}
            className="bg-bg-secondary border border-border rounded-xl overflow-hidden transition-all hover:border-border-hover"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-bg-tertiary transition-colors"
            >
              <span className="font-semibold text-lg text-text-primary">
                {item.question}
              </span>
              <FiChevronDown
                className={cn(
                  'flex-shrink-0 text-gray-400 transition-transform duration-200',
                  isOpen && 'transform rotate-180'
                )}
                size={24}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-2 border-t border-border">
                <div className="text-gray-400 leading-relaxed space-y-1">
                  {answerArray.map((line, lineIndex) => (
                    <p key={lineIndex} className={line === '' ? 'h-2' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
