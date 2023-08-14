import { Game } from '../types/core'

export class GamesStore {

    public gameList: Game[] = [{
        id: 'splat3',
        name: 'Splatoon 3'
    }, {
        id: 'valheim',
        name: 'Valheim'
    }, {
        id: 'mhr',
        name: 'Monster Hunter Rise'
    }, {
        id: 'ror',
        name: 'Risk of Rain'
    }, {
        id: 'unite',
        name: 'Pokemon Unite'
    }, {
        id: 'apex',
        name: 'Apex Legends'
    }, {
        id: 'valorant',
        name: 'Valorant'
    }, {
        id: 'bloons',
        name: 'Bloons Tower Defense 3'
    }, {
        id: 'gmod',
        name: 'Garry\'s Mod'
    }, {
        id: 'gta',
        name: 'Grand Theft Auto V'
    }, {
        id: 'mk',
        name: 'Mario Kart 8'
    }]

    public default: Game = {
        id: '',
        name: ''
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