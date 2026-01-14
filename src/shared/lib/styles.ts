/**
 * 공통 스타일 유틸리티
 * 
 * 섹션, 링크, 카드 등에서 자주 사용되는 스타일 조합을 제공합니다.
 * 테마 토큰을 사용하여 일관성 있는 스타일링을 보장합니다.
 */

export const sectionStyles = {
  /** 어두운 배경 섹션 */
  dark: 'relative isolate py-24 bg-bg-primary',
  
  /** 밝은 배경 섹션 (이전 섹션과의 경계 겹침 방지) */
  light: 'relative isolate py-24 bg-bg-surface -mt-px',
  
  /** 반투명 배경 섹션 */
  transparent: 'relative isolate py-20 bg-bg-primary/50',
  
  /** 헤더용 섹션 */
  header: 'fixed top-0 left-0 right-0 z-50 bg-bg-header/80 backdrop-blur-md border-b border-border',
} as const

export const linkStyles = {
  /** 기본 링크 스타일 */
  default: 'hover:text-primary transition-colors',
  
  /** 밑줄이 있는 링크 스타일 */
  underline: 'hover:text-primary transition-colors underline',
  
  /** 소셜 미디어 아이콘 링크 스타일 */
  social: 'w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:bg-primary/20 hover:text-primary transition-all',
} as const

export const cardStyles = {
  /** 기본 다크 카드 */
  dark: 'bg-bg-tertiary border border-border rounded-xl p-6 transition-all hover:border-border-hover',
  
  /** 라이트 카드 (흰색 배경 위에서 사용) */
  light: 'bg-bg-secondary border-none',
  
  /** 파트너 로고 카드 */
  partner: 'h-16 flex items-center justify-center bg-bg-tertiary text-text-primary rounded-lg font-medium text-sm px-4',
} as const

export const buttonStyles = {
  /** 이벤트 카드 내부 버튼 */
  eventCard: 'w-full border-border text-text-primary hover:bg-primary hover:text-text-dark hover:border-primary',
} as const

export const badgeStyles = {
  /** 다가오는 이벤트 배지 */
  upcoming: 'bg-primary/10 text-primary border border-primary',
  
  /** 지난 이벤트 배지 */
  past: 'bg-white/10 text-text-muted border border-border',
} as const

/**
 * 스타일 유틸리티 타입
 */
export type SectionStyle = keyof typeof sectionStyles
export type LinkStyle = keyof typeof linkStyles
export type CardStyle = keyof typeof cardStyles
export type ButtonStyle = keyof typeof buttonStyles
export type BadgeStyle = keyof typeof badgeStyles
