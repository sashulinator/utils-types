import type { Cast } from '../any/cast'
import type { BuiltIn } from '../misc/builtIn'
import type { Depth } from '../object/_internal'
import type { Assign as OAssign } from '../object/assign'
import type { List } from './list'

/**
 * Assign a list of [[List]] into `L` with [[Merge]]. Merges from left to
 * right, first items get overridden by the next ones (last-in overrides).
 * @param L to assign to
 * @param Ls to assign
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @param ignore (?=`BuiltIn`) types not to merge
 * @param fill (?=`undefined`) types of `O` to be replaced with ones of `O1`
 * @returns [[Object]]
 * @example
 * ```ts
 * import type {L} from 'ts-toolbelt'
 *
 * type test0 = Assign<[1, 2, 3], [[2, 1]]> // [2, 1, 3]
 * type test1 = Assign<[], [[1, 2, 3, 4], [2, 4, 6]]> // [2, 4, 6, 4]
 * type test2 = Assign<[0, 0, 0, 0, 0], [[0, 1], [0, 2, 0, 4?]]> // [0, 2, 0, 0 | 4, 0]
 * ```
 */
export type Assign<
  L extends List,
  Ls extends List<List>,
  depth extends Depth = 'flat',
  ignore extends object = BuiltIn,
  fill extends any = never,
> = Cast<OAssign<L, Ls, depth, ignore, fill>, List>
