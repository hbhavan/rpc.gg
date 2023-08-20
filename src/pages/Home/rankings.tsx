import { GamerTag } from '../../components/GamerTag'
import { gamerStore } from '../../stores'
import { observer } from 'mobx-react-lite'
import { MainText, Points, PointsBox, RankingContainer, RankingRow } from './styles'
import { useEffect, useState } from 'react'
import { Gamer } from '../../types/core'
import { Spinner } from '@chakra-ui/react'
import { toJS } from 'mobx'

export const Rankings = observer(() => {
    const [gamers, setGamers] = useState<Gamer[]>([])

    const loading = toJS(gamerStore.loading)

    useEffect(() => {
        async function fetchGamers() {
            const data: Gamer[] = await gamerStore.getGamers()
            return data
        }

        async function fetchPoints(gamerId: string) {
            const data: number = await gamerStore.getPoints(gamerId)
            return data
        }

        async function getGamersAndPoints() {
            try {
                gamerStore.initLoading(true)
                const gamerData = await fetchGamers()
                const gamerDataWithPoints = await Promise.all(gamerData.map(async gamer => {
                    const pointsData = await fetchPoints(gamer.id)
                    return {...gamer, points: pointsData}
                }))
                setGamers(gamerDataWithPoints)
                gamerStore.initLoading(false)
            } catch (err) {
                console.error(err)
                setGamers([])
            }
        }
        
        getGamersAndPoints()
    }, [])

    return (
        <RankingContainer>
            {loading ? 
                <>
                    <MainText>Loading...<Spinner/> </MainText>
                    
                </>
                : 
                <></>
            }
            {!!gamers && gamers.sort((a, b) => (
                a.points < b.points ? 1 : -1
            )).map((gamer) => (
                <RankingRow
                    key={gamer.id}
                >
                    <GamerTag gamer={gamer}/>
                    <PointsBox>
                        <Points>{gamer.points}</Points>
                    </PointsBox>
                </RankingRow>
            ))}
        </RankingContainer>
)})