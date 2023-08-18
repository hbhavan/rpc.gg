import { toastStore } from '.'
import { SessionAPI } from '../api/session'
import { Session } from '../types/core'

export class SessionStore {

    public sessions: Session[] = []

    public async getSessions(gameId: string) {
        try {
            const sessions = await SessionAPI.getSessionsByGame(gameId)
            return sessions
        } catch (err) {
            console.error(err)
            this.sessions = []
        }
    }

    public async submitSession(session: Session) {
        try {
            let wins: number = 0
            let losses: number = 0
            let sessions: number = 0
            let eggs: number = 0
            if(!isNaN(session.wins)) { wins = session.wins }
            if(!isNaN(session.losses)){ losses = session.losses }
            if(!isNaN(session.sessions)){ sessions = session.sessions }
            if(!isNaN(session.eggs)){ eggs = session.eggs}
            const data: Session = {
                gameId: session.gameId,
                wins: wins,
                losses: losses,
                sessions: sessions,
                eggs: eggs,
                gamers: session.gamers,
                date: session.date
            }
            await SessionAPI.postSession(data)
            toastStore.submitToast()
        } catch (err) {
            toastStore.errorToast(err)
        }
    }

    public async deleteSession(sessionId: string) {
        try {
            await SessionAPI.deleteSession(sessionId)
            toastStore.submitToast()
        } catch (err) {
            console.error(err)
            toastStore.errorToast(err)
        }
    }
}