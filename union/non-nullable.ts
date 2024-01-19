import type { Exclude } from './exclude'

/**
 * Remove `undefined` & `null` out of `U`
 * @param U to make non-nullable
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type NonNullable<U extends any> = Exclude<U, undefined | null>
