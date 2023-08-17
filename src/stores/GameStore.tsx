import { GameAPI } from '../api/games'
import { Game } from '../types/core'

export class GamesStore {

    public gameList: Game[] = []

    public default: Game = {
        id: '',
        name: ''
    }

    public async getGameList() {
        try {
            const games = await GameAPI.getGames()
            return games
        } 
        catch (err) {
            console.error(err)
            this.gameList = []
        }
    }

    public getGame = (id: string): Game => {
        const game = this.gameList.find(
            game => game.id === id
        )
        if(!!game) return game
        else return this.default
    }
}