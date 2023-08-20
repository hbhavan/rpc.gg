import { GamerAPI } from '../api/gamers'
import { Gamer } from '../types/core'

export class GamerStore {
    public gamers: Gamer[] = []
    public loading: boolean = false
    public defaultGamer: Gamer = {
        id: '',
        name: '',
        color: 'zara.100',
        points: 0
    }
    
    public async getGamers() {
        try {
            const gamers = await GamerAPI.getGamers()  
            this.initGamers(gamers)
            return gamers
        }
        catch (err) {
            this.gamers = []
            console.error(err)
        }
    }

    private async initGamers(data: Gamer[]) {
        this.gamers = []
        data?.map((gamer: Gamer) => {
            this.gamers.push({
                id: gamer.id,
                name: gamer.name,
                color: gamer.color,
                points: 0
            })
        })
    }

    public async getPoints(gamerId: string) {
        try {
            const points: number = await GamerAPI.getPoints(gamerId)
            return points
        }
        catch (err) {
            console.error(err)
            return 0
        }
    }

    public initLoading(isLoading: boolean) {
        this.loading = isLoading
    }
}