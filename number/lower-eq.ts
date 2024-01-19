import type { GreaterEq } from './greater-eq'

/**
 * Check if a [[Number]] is lower or equal to another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns [[Boolean]]
 * @example
 * ```ts
 * import type {N} from 'ts-toolbelt'
 *
 * type test0 = N.LowerEq<'7', '5'> // False
 * type test1 = N.LowerEq<'5', '5'> // True
 * type test2 = N.LowerEq<'5', '7'> // True
 * ```
 */
export type LowerEq<N1 extends number, N2 extends number> = GreaterEq<N2, N1>
