export interface Game {
    id: string,
    name: string,
}

export interface Gamer {
    id: string,
    name: string,
    points: number
}

export interface Session {
    id: string,
    game: Game,
    rounds: number,
    gamers: Gamer[],
    wins: number,
    losses: number,
    eggs?: number    
}
