import type { KeySet } from './key-set'
import type { List } from './list'
import type { Omit } from './omit'

/**
 * Remove out of `L` a range of entries
 * @param L to remove from
 * @param From to start from
 * @param To to end with
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Remove<L extends List, From extends number, To extends number> = Omit<L, KeySet<From, To>>
