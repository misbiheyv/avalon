import { Game } from '@/game'
import type { TGameStage } from '@/game'

export type TBeforeMethods = `before${Capitalize<TGameStage>}`
export type TAfterMethods = `after${Capitalize<TGameStage>}`

export type TBefore = Partial<Record<TBeforeMethods, (prev: TGameStage) => boolean>>
export type TAfter = Partial<Record<TAfterMethods, (next: TGameStage) => boolean>>

export type TRolesWithAddons = 'merlin'

export interface IGameAddon extends TBefore, TAfter {
  game: Game
}
