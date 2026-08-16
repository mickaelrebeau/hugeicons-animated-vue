declare module '../../../../scripts/icon-families.mjs' {
  export type FamilyDef = {
    mode: 'group' | 'svg' | 'split' | 'draw'
    loops?: boolean
    variants?: Record<string, unknown>
    frame?: Record<string, unknown>
    mark?: Record<string, unknown>
  }

  export const FAMILIES: Record<string, FamilyDef>
  export function classifyIcon(name: string): string
  export function toKebab(name: string): string
  export function toPascal(kebab: string): string
}
