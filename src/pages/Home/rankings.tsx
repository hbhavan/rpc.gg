import { Spacer } from '@chakra-ui/react'
import { GamerTag } from '../../components/GamerTag'
import { gamerStore } from '../../stores'
import { Points, PointsBox, RankingContainer, RankingRow } from './styles'

export const Rankings = () => {
    
    const gamers = gamerStore.getGamers()

    return (
        <RankingContainer>
            {gamers.sort((a, b) => (
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
)}