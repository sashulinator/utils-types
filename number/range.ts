import type { Cast } from '../any/cast'
import type { Extends } from '../any/extends'
import type { Way } from '../iteration/_internal'
import type { Iteration } from '../iteration/iteration'
import type { IterationOf } from '../iteration/iteration-of'
import type { Next } from '../iteration/next'
import type { Pos } from '../iteration/pos'
import type { Prev } from '../iteration/prev'
import type { List } from '../list/list'
import type { Prepend } from '../list/prepend'

/**
 * @hidden
 */
type RangeForth<From extends Iteration, To extends Iteration, L extends List = []> = {
  0: RangeForth<Prev<From>, To, Prepend<L, Pos<From>>>
  1: L
}[Extends<From, To>]

/**
 * @hidden
 */
type RangeBack<From extends Iteration, To extends Iteration, L extends List = []> = {
  0: RangeBack<Next<From>, To, Prepend<L, Pos<From>>>
  1: L
}[Extends<From, To>]

/**
 * @hidden
 */
type __Range<From extends Iteration, To extends Iteration, way extends Way> = {
  '->': RangeForth<To, Prev<From>> // Reverse logic to work naturally #`Prepend`
  '<-': RangeBack<From, Next<To>> // Works in reverse mode (default) #`Prepend`
}[way]

/**
 * @hidden
 */
export type _Range<From extends number, To extends number, way extends Way> = __Range<
  IterationOf<From>,
  IterationOf<To>,
  way
> extends infer X
  ? Cast<X, (string | number)[]>
  : never

/**
 * Create a range of * *number**s
 * @param From to start with
 * @param To to end with
 * @param way (?=`'->'`) to reverse it
 * @returns `string[] | number[] | boolean[]`
 * @example
 * ```ts
 * import type {N} from 'ts-toolbelt'
 *
 * type test0 = N.Range<'-2', '1'>            // ['-2', '-1', '0', '1']
 * type test1 = N.Range<'-2', '1', '->'>      // ['-2', '-1', '0', '1']
 * type test2 = N.Range<'-2', '1', '<-'>      // ['1', '0', '-1', '-2']
 * ```
 */
export type Range<From extends number, To extends number, way extends Way = '->'> = From extends unknown
  ? To extends unknown
    ? _Range<From, To, way>
    : never
  : never
