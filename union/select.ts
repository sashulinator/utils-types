import type { Match } from '../any/_internal'
import type { Is } from '../any/is'

/**
 * Extract the part of `U` that matches `M`
 * @param U to extract from
 * @param M to select with
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Select<U extends any, M extends any, match extends Match = 'default'> = U extends unknown
  ? { 1: U & M; 0: never }[Is<U, M, match>]
  : never
