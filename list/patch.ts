import type { Cast } from '../any/cast'
import type { BuiltIn } from '../misc/builtIn'
import type { Depth } from '../object/_internal'
import type { Patch as OPatch } from '../object/patch'
import type { List } from './list'

/**
 * Complete the fields of `L` with the ones of `L1`. This is a version of
 * [[Merge]] that does NOT handle optional fields, it only completes fields of `O`
 * with the ones of `O1` if they don't exist.
 *
 * (⚠️ needs `--strictNullChecks` enabled)
 * @param L to complete
 * @param L1 to copy from
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @param ignore (?=`BuiltIn`) types not to merge
 * @param fill (?=`never`) types of `O` to be replaced with ones of `O1`
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Patch<
  L extends List,
  L1 extends List,
  depth extends Depth = 'flat',
  ignore extends object = BuiltIn,
  fill extends any = never,
> = Cast<OPatch<L, L1, depth, ignore, fill>, List>
