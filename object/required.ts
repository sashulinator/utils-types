import type { Key } from '../any/key'
import type { BuiltIn } from '../misc/builtIn'
import type { Depth } from './_internal'
import type { PatchFlat } from './patch'
import type { _Pick } from './pick'

/**
 * @hidden
 */
export type RequiredFlat<O> = {
  [K in keyof O]-?: O[K]
} & {}

/**
 * @hidden
 */
export type RequiredDeep<O> = {
  [K in keyof O]-?: O[K] extends BuiltIn ? O[K] : RequiredDeep<O[K]>
}

/**
 * @hidden
 */
export type RequiredPart<O extends object, depth extends Depth> = {
  flat: RequiredFlat<O>
  deep: RequiredDeep<O>
}[depth]

/**
 * @hidden
 */
export type _Required<O extends object, K extends Key, depth extends Depth> = PatchFlat<
  RequiredPart<_Pick<O, K>, depth>,
  O
>

/**
 * Make some fields of `O` required (deeply or not)
 * @param O to make required
 * @param K (?=`Key`) to choose fields
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Required<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = O extends unknown
  ? _Required<O, K, depth>
  : never
