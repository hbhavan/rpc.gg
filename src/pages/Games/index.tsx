import { FC } from "react"
import { Session } from "../../components/SessionBox/Session"
import { Game } from "../../types/core"
import { GameDetailsContainer, GameTitle, Sessions } from "./styles"


interface IGamePageProps {
    game: Game
}

export const GameDetails: FC<IGamePageProps> = ({
    game
}) => {
    return (
        <>
            {!!game.id &&
                <GameDetailsContainer>
                    <GameTitle>
                        {game.name}
                    </GameTitle>
                    <Sessions>
                        <Session
                            game={game}
                            eggs={true}
                        />
                    </Sessions>
                </GameDetailsContainer>
            }
        </>
)}