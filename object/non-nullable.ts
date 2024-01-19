import type { Key } from '../any/key'
import type { BuiltIn } from '../misc/builtIn'
import type { NonNullable as UNonNullable } from '../union/non-nullable'
import type { Depth } from './_internal'
import type { PatchFlat } from './patch'
import type { _Pick } from './pick'

/**
 * @hidden
 */
export type NonNullableFlat<O> = {
  [K in keyof O]: UNonNullable<O[K]>
} & {}

/**
 * @hidden
 */
export type NonNullableDeep<O> = {
  [K in keyof O]: O[K] extends BuiltIn ? O[K] : NonNullableDeep<UNonNullable<O[K]>>
}

/**
 * @hidden
 */
export type NonNullablePart<O extends object, depth extends Depth> = {
  flat: NonNullableFlat<O>
  deep: NonNullableDeep<O>
}[depth]

/**
 * @hidden
 */
export type _NonNullable<O extends object, K extends Key, depth extends Depth> = PatchFlat<
  NonNullablePart<_Pick<O, K>, depth>,
  O
>

/**
 * Make some fields of `O` not nullable (deeply or not)
 * (Optional fields will be left untouched & `undefined`)
 * @param O to make non nullable
 * @param K (?=`Key`) to choose fields
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type NonNullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = O extends unknown
  ? _NonNullable<O, K, depth>
  : never
