import type { Cast } from '../any/cast'
import type { Iteration } from '../iteration/iteration'
import type { IterationOf } from '../iteration/iteration-of'
import type { Next } from '../iteration/next'
import type { Pos } from '../iteration/pos'
import type { Prev } from '../iteration/prev'
import type { _IsNegative } from './is-negative'

/**
 * @hidden
 */
type _SubPositive<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubPositive<Prev<N1>, Prev<N2>> // N1 = -/+, N2 = +
  1: N1
  2: number
}[Pos<N2> extends 0 // If successful
  ? 1
  : number extends Pos<N2> // If un-success
    ? 2
    : 0] // Or continue

/**
 * @hidden
 */
type SubPositive<N1 extends Iteration, N2 extends Iteration> = _SubPositive<N1, N2> extends infer X
  ? Cast<X, Iteration>
  : never

/**
 * @hidden
 */
type _SubNegative<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubNegative<Next<N1>, Next<N2>> // N1 = -/+, N2 = -
  1: N1
  2: number
}[Pos<N2> extends 0 // If successful
  ? 1
  : number extends Pos<N2> // If un-success
    ? 2
    : 0] // Or continue

/**
 * @hidden
 */
type SubNegative<N1 extends Iteration, N2 extends Iteration> = _SubNegative<N1, N2> extends infer X
  ? Cast<X, Iteration>
  : never

/**
 * @hidden
 */
export type _Sub<N1 extends Iteration, N2 extends Iteration> = {
  0: SubPositive<N1, N2>
  1: SubNegative<N1, N2>
}[_IsNegative<N2>]

/**
 * Subtract a [[Number]] from another one
 * @param N1 Left-hand side
 * @param N2 Right-hand side
 * @returns `string | number | boolean`
 * @example
 * ```ts
 * import type {N} from 'ts-toolbelt'
 *
 * type test0 = N.Sub<'2', '10'>        // '-8'
 * type test1 = N.Sub<'0', '40'>        // '-40'
 * type test2 = N.Sub<'0', '40', 's'>   // '-40'
 * type test3 = N.Sub<'0', '40', 'n'>   //  -40
 * type test4 = N.Sub<'-20', '40', 's'> // string
 * type test5 = N.Sub<'-20', '40', 'n'> // number
 * ```
 */
export type Sub<N1 extends number, N2 extends number> = N1 extends unknown
  ? N2 extends unknown
    ? _Sub<IterationOf<N1>, IterationOf<N2>>[0]
    : never
  : never
