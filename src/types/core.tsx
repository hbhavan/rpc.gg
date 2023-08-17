export interface Game {
    id: string,
    name: string,
}

export interface Gamer {
    id: string,
    name: string,
    color: string,
    points: number
}

export interface Session {
    id?: string,
    gameId: string,
    wins: number,
    losses: number,
    eggs: number,  
    sessions: number,
    gamers: Gamer[],
    date: Date
}
