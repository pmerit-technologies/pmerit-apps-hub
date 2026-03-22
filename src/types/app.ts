export type AppStatus = 'live' | 'beta' | 'coming-soon'

export type AppCategory =
  | 'Household'
  | 'AI Tools'
  | 'Personal AI'
  | 'Finance'
  | 'Legal'
  | 'HR / Finance'

export interface AppInfo {
  id: string
  name: string
  description: string
  status: AppStatus
  category: AppCategory
  url?: string
  icon: string
}
