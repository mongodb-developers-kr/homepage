import { qnaList } from '@shared/content'
import { cn } from '@shared/lib/utils'
import { useState } from 'react'

export const QnAList = () => {
  const [openId, setOpenId] = useState<string | null>(qnaList[0]?.id ?? null)

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {qnaList.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className="bg-bg-secondary border border-border rounded-xl overflow-hidden transition-all hover:border-border-hover"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-bg-tertiary transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg text-text-primary">
                {item.question}
              </span>
              <span
                aria-hidden
                className={cn(
                  'flex-shrink-0 font-mono text-2xl font-bold transition-all duration-300',
                  isOpen ? 'text-primary' : 'text-primary/60',
                )}
              >
                {isOpen ? '{ }' : '{...}'}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-2 border-t border-border">
                <div className="text-gray-400 leading-relaxed space-y-1">
                  {item.answer.map((line, lineIndex) => (
                    <p
                      key={`${item.id}-${lineIndex}`}
                      className={line === '' ? 'h-2' : ''}
                    >
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
