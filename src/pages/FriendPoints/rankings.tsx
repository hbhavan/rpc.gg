import { GamerTag } from '../../components/GamerTag'
import { Points, PointsBox, RankingContainer, RankingRow } from './styles'
import { friendPointRankings } from './mock'

export const Rankings = () => {

    return (
        <RankingContainer>
            {!!friendPointRankings && friendPointRankings.sort((a, b) => (
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