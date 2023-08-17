import { Session } from "../types/core";
import { sessionInstance } from "./instances";

export class SessionAPI {

    static async postSession(session: Session) {
        const response = await sessionInstance.post<Session>(``, session)
        return response.data || {}
    }

    static async getSessionsByGame(gameId: string) {
        const { data = {} } = await sessionInstance.get(`?gameId=${gameId}`)
        return data
    }
}