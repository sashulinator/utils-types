import type { Has } from '../union/has'
import type { List } from './list'

/**
 * Get the longest [[List]] of `L` & `L1`
 * (`L` has priority if both lengths are equal)
 * @param L to compare length
 * @param L1 to compare length
 * @returns `L | L1`
 * @example
 * ```ts
 * ```
 */
export type Longest<L extends List, L1 extends List> = L extends unknown
  ? L1 extends unknown
    ? { 0: L1; 1: L }[Has<keyof L, keyof L1>]
    : never
  : never
