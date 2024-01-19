import type { Key } from '../any/key'
import type { BuiltIn } from '../misc/builtIn'
import type { Depth } from './_internal'
import type { PatchFlat } from './patch'
import type { _Pick } from './pick'

/**
 * @hidden
 */
export type UndefinableFlat<O> = {
  [K in keyof O]: O[K] | undefined
} & {}

/**
 * @hidden
 */
export type UndefinableDeep<O> = {
  [K in keyof O]: O[K] extends BuiltIn ? O[K] : UndefinableDeep<O[K] | undefined>
}

/**
 * @hidden
 */
type UndefinablePart<O extends object, depth extends Depth> = {
  flat: UndefinableFlat<O>
  deep: UndefinableDeep<O>
}[depth]

/**
 * @hidden
 */
export type _Undefinable<O extends object, K extends Key, depth extends Depth> = PatchFlat<
  UndefinablePart<_Pick<O, K>, depth>,
  O
>

/**
 * Make some fields of `O` `undefined` (deeply or not)
 * @param O to make undefinable
 * @param K (?=`Key`) to choose fields
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Undefinable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = O extends unknown
  ? _Undefinable<O, K, depth>
  : never
