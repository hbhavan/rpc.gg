import { Gamer } from "../types/core";

export class GamerStore {
    public gamers: Gamer[] = [
        {
            id: 'blues',
            name: 'Blues',
            points: 0,
        },
        {
            id: 'dex',
            name: 'Dex',
            points: 0,
        },
        {
            id: 'dom',
            name: 'Dom',
            points: 0,
        },
        {
            id: 'chubby',
            name: 'Chubby',
            points: 0,
        },
        {
            id: 'fen',
            name: 'Fen',
            points: 0,
        },
        {
            id: 'foppy',
            name: 'Foppy',
            points: 0,
        },
        {
            id: 'gearetical',
            name: 'Gear',
            points: 0,
        },
        {
            id: 'king',
            name: 'King',
            points: 0,
        },
        {
            id: 'mykey',
            name: 'Mykey',
            points: 0,
        },
        {
            id: 'llama',
            name: 'Llama',
            points: 0,
        },
        {
            id: 'logi',
            name: 'Logi',
            points: 0,
        },
        {
            id: 'pasta',
            name: 'Pasta',
            points: 0,
        },
        {
            id: 'puff',
            name: 'Puff',
            points: 0,
        },
        {
            id: 'ryuu',
            name: 'Ryuu',
            points: 0
        },
        {
            id: 'soul',
            name: 'Soul',
            points: 0,
        },
        {
            id: 'styles',
            name: 'Styles',
            points: 0,
        },
        {
            id: 'thunder',
            name: 'Thunder',
            points: 0,
        },
        {
            id: 'tux',
            name: 'Tux',
            points: 0,
        },
        {
            id: 'xjago8',
            name: 'Xjago8',
            points: 0,
        },
        {
            id: 'zeddby',
            name: 'Zeddby',
            points: 0,
        },
    ]

    public getGamers = () => {
        return this.gamers
    }
}