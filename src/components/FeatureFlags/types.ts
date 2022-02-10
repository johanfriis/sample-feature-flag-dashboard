export type InputValues = number | string | boolean

export type Flag = {
  label: string
  id: string
  hasInput?: boolean
  inputValues?: InputValues[]
  flags?: Flag[]
}

export type Block = Flag | Flag[]

export type Section = {
  label: string
  id: string
  gap?: boolean
  fillBackground?: boolean
  width?: 'full' | 'thirds'
  wrap?: boolean
  blocks: Block[]
}

export type Schema = Record<string, Section>
  // Section[]
