import { Game } from "../types/core";

export class GamesStore {

    public gameList: Game[] = [{
        id: 'splatoon3',
        name: 'Splatoon 3',
    }]

    public default: Game = {
        id: '',
        name: '',
    }

    public getGameList = () => {
        return this.gameList
    }

    public getGame = (id: string): Game => {
        const game = this.gameList.find(
            game => game.id === id
        )
        if(!!game) return game
        else return this.default
    }
}