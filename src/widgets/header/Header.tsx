import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import mainLogo from './styles/main-logo.png'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'groups', label: 'Groups' },
  { id: 'events', label: 'Events' },
  { id: 'qna', label: 'Q & A' },
  { id: 'partners', label: 'Partners' },
]

const HEADER_HEIGHT = 80

export const Header = () => {
  const currentSectionRef = useRef<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    currentSectionRef.current = null
    setIsMenuOpen(false)
  }

  const scrollToSection = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault()
    setIsMenuOpen(false)

    const element = document.getElementById(sectionId)
    if (!element) return

    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    currentSectionRef.current = sectionId
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-header/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="홈으로 이동"
        >
          <img
            src={mainLogo}
            alt="MongoDB 한국 개발자 모임"
            className="w-50 h-10 flex-shrink-0"
          />
          <span className="text-xl font-bold tracking-tight flex-shrink-0">
            Developers KR
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(item.id, e)}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center rounded-lg text-text-primary hover:bg-white/10 transition-colors"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-border bg-bg-header/95 backdrop-blur-md"
        >
          <ul className="container mx-auto px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className="block py-3 text-base font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
