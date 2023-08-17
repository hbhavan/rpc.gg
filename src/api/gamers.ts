import { gamersInstance } from "./instances";

export class GamerAPI {
    static async getGamers() {
        const { data = {} } = await gamersInstance.get(``)
        return data
    }

    static async getPoints(gamerId: string) {
        const { data = {} } = await gamersInstance.get(`points?gamerId=${gamerId}`)
        return data
    }
}