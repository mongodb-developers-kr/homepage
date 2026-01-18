import { useRef } from 'react'
import mainLogo from './styles/main-logo.png'

export const Header = () => {
  const currentSectionRef = useRef<string | null>(null)

  const scrollToSection = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (currentSectionRef.current === sectionId) {
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      currentSectionRef.current = sectionId
    }
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-header/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 flex-shrink-0">
              <img
                src={mainLogo}
                alt="MongoDB 한국 사용자 모임"
                className="w-50 h-10 flex-shrink-0"
              />
            </span>
            <span className="text-xl font-bold tracking-tight flex-shrink-0">
              한국 개발자 모임
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
            }}
            className="hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#groups"
            onClick={(e) => scrollToSection('groups', e)}
            className="hover:text-primary transition-colors"
          >
            Groups
          </a>
          <a
            href="#events"
            onClick={(e) => scrollToSection('events', e)}
            className="hover:text-primary transition-colors"
          >
            Events
          </a>
          <a
            href="#partners"
            onClick={(e) => scrollToSection('partners', e)}
            className="hover:text-primary transition-colors"
          >
            Partners
          </a>
          <a
            href="#qa"
            onClick={(e) => {
              e.preventDefault()
            }}
            className="hover:text-primary transition-colors"
          >
            Q & A
          </a>
        </nav>
        {/* 
        <Button size="sm">Join Us</Button> */}
      </div>
    </header>
  )
}
