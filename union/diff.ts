import type { Exclude } from './exclude'

/**
 * Get an [[Union]] that is the difference between `U1` & `U2`
 * @param U1 to check differences with
 * @param U2 to check differences against
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Diff<U1 extends any, U2 extends any> = Exclude<U1, U2> | Exclude<U2, U1>
