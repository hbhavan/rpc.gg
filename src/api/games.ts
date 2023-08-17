import { gameInstance } from "./instances";

export class GameAPI {
    static async getGames() {
        const { data = {} } = await gameInstance.get(``)
        return data
    }
}