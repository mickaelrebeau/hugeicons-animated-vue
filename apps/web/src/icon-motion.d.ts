declare module '../../../../scripts/icon-motion.mjs' {
  export type MotionRole = {
    kind: string
    origin?: [number, number]
    custom?: number
    tx?: number
    ty?: number
  }

  export type MotionPlan = {
    roles: MotionRole[]
    loops: boolean
    verb: string
    seed: number
    donor?: string
    recipe?: string
    clip?: boolean
    source?: 'semantic' | 'geometry' | 'handcrafted'
  }

  export type VariantSpec = {
    normal: Record<string, unknown>
    animate: Record<string, unknown>
    custom?: { delayPer: number; delayBase?: number }
  }

  export function planIcon(name: string, elements: [string, Record<string, string | number>][]): MotionPlan
  export function variantsFor(kind: string, role?: MotionRole, seed?: number): VariantSpec
  export function toMotionVariants(spec: VariantSpec): {
    normal: Record<string, unknown>
    animate: Record<string, unknown> | ((i: number) => Record<string, unknown>)
  }
  export function usesCustom(kind: string): boolean
  export function toKebab(name: string): string
  export function toPascal(kebab: string): string
}
