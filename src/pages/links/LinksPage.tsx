/**
 * QR 코드로 들어오는 모바일용 링크 모음 페이지 (/links/).
 * 밋업 현장에서 휴대폰으로 찍었을 때 필요한 곳으로 한 번에 이동하는 것이 목적이라
 * 큰 버튼만 세로로 둡니다.
 */
import { formatEventDate, nextEvent, site } from '@shared/content'
import { cn } from '@shared/lib/utils'
import mainLogo from '@widgets/header/styles/main-logo.png'
import type { ReactNode } from 'react'
import { FaLinkedin, FaSlack } from 'react-icons/fa'
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMic,
  FiHome,
} from 'react-icons/fi'

type LinkItem = {
  href: string
  label: string
  description: string
  icon: ReactNode
  external?: boolean
  highlight?: boolean
}

const links: LinkItem[] = [
  nextEvent?.link
    ? {
        href: nextEvent.link,
        label: '다음 밋업 신청하기',
        description: `${formatEventDate(nextEvent.date)} · ${nextEvent.title}`,
        icon: <FiCalendar size={22} />,
        external: true,
        highlight: true,
      }
    : {
        href: site.links.lumaGroup,
        label: '다음 밋업 일정 보기',
        description: 'Luma에서 MUG Seoul을 구독하면 새 일정을 알려드려요',
        icon: <FiCalendar size={22} />,
        external: true,
        highlight: true,
      },
  {
    href: site.links.slackJoin,
    label: 'Slack 참여하기',
    description: '질문, 행사 공지, 자료 공유가 이루어지는 곳',
    icon: <FaSlack size={22} />,
    external: true,
  },
  {
    href: site.links.linkedinGroup,
    label: 'LinkedIn 그룹',
    description: 'MUG Seoul 소식과 발표 후기',
    icon: <FaLinkedin size={22} />,
    external: true,
  },
  ...(nextEvent?.link
    ? [
        {
          href: site.links.lumaGroup,
          label: 'Luma 캘린더 구독',
          description: '앞으로의 모든 MUG Seoul 일정',
          icon: <FiCalendar size={22} />,
          external: true,
        },
      ]
    : []),
  {
    href: '/#events',
    label: '지난 행사 보기',
    description: '지금까지의 밋업과 기술 세션',
    icon: <FiClock size={22} />,
  },
  {
    href: site.links.speakerForm,
    label: '발표 제안하기',
    description: '짧은 사례, 시행착오도 환영해요',
    icon: <FiMic size={22} />,
    external: true,
  },
  {
    href: '/',
    label: '홈페이지',
    description: site.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    icon: <FiHome size={22} />,
  },
]

export const LinksPage = () => {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <header className="mb-8 text-center">
          <img
            src={mainLogo}
            alt={site.name}
            className="mx-auto mb-4 h-10 w-auto"
          />
          <h1 className="text-xl font-bold">{site.tagline}</h1>
          <p className="mt-2 text-sm text-gray-400">MUG Seoul · {site.name}</p>
        </header>

        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className={cn(
                  'flex min-h-16 items-center gap-4 rounded-2xl border px-5 py-4 transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
                  link.highlight
                    ? 'border-primary bg-primary text-text-dark hover:bg-primary-hover'
                    : 'border-white/10 bg-bg-tertiary hover:border-primary/60',
                )}
              >
                <span
                  className={cn(
                    'flex-shrink-0',
                    link.highlight ? 'text-text-dark' : 'text-primary',
                  )}
                  aria-hidden
                >
                  {link.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{link.label}</span>
                  <span
                    className={cn(
                      'line-clamp-2 text-sm',
                      link.highlight ? 'text-text-dark/80' : 'text-gray-400',
                    )}
                  >
                    {link.description}
                  </span>
                </span>
                {link.external && (
                  <FiArrowUpRight
                    size={18}
                    aria-hidden
                    className={cn(
                      'flex-shrink-0',
                      link.highlight ? 'text-text-dark/70' : 'text-gray-500',
                    )}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-gray-500">
          커뮤니티가 자발적으로 운영하는 모임이며{' '}
          <a
            href={site.links.codeOfConduct}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Code of Conduct
          </a>
          를 따릅니다.
        </p>
      </div>
    </main>
  )
}
