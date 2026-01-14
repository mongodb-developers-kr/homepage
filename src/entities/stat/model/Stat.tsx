export type Stat = {
  id: string
  icon: React.ReactNode
  value: number
  label: StatLabel
}

export type StatLabel = '회원' | '이벤트'
