import { GamesStore } from './GameStore'
import { GamerStore } from './GamerStore'
import { SessionStore } from './SessionStore'

export const gameStore = new GamesStore()
export const gamerStore = new GamerStore()
export const sessionStore = new SessionStore()