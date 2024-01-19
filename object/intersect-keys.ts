import type { Match } from '../any/_internal'
import type { At } from '../any/at'
import type { Is } from '../any/is'
import type { Keys } from '../any/keys'

/**
 * @hidden
 */
export type _IntersectMatch<O extends object, O1 extends object, match extends Match> = {
  [K in keyof O]-?: {
    1: K
    0: never
  }[Is<O[K], At<O1, K>, match>]
}[keyof O]

/**
 * @hidden
 */
type IntersectMatch<O extends object, O1 extends object, match extends Match> = O extends unknown
  ? _IntersectMatch<O, O1, match>
  : never

/**
 * Get the intersecting keys of `O` & `O1`
 * (If `match = 'default'`, no type checks are done)
 * @param O to check similarities with
 * @param O1 to check similarities against
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type IntersectKeys<O extends object, O1 extends object, match extends Match = 'default'> = {
  default: Keys<O> & Keys<O1>
  'contains->': IntersectMatch<O, O1, 'contains->'>
  'extends->': IntersectMatch<O, O1, 'extends->'>
  '<-contains': IntersectMatch<O, O1, '<-contains'>
  '<-extends': IntersectMatch<O, O1, '<-extends'>
  equals: IntersectMatch<O, O1, 'equals'>
}[match]
