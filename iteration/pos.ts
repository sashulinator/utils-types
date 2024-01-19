import type { Iteration } from './iteration'

/**
 * Get the position of `I` (**number**)
 * @param I to query
 * @returns `number`
 * @example
 * ```ts
 * import type {I} from 'ts-toolbelt'
 *
 * type i = I.IterationOf<'20'>
 *
 * type test0 = I.Pos<i>         // 20
 * type test1 = I.Pos<I.Next<i>> // 21
 * ```
 */
export type Pos<I extends Iteration> = I[0]
