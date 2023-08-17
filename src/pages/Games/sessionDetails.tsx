import { FC } from "react"
import { GamerTag } from "../../components/GamerTag"
import { Session } from "../../types/core"
import { GamerTagContainer, SessionDetail, SessionDetailContainer, SessionDetailText, SessionDetailTitle, SessionFriends, SessionStats } from "./styles"

interface ISessionDetailsProps {
    sessions: Session[]
}

export const SessionDetails: FC<ISessionDetailsProps> = ({
    sessions
}) => {
    return (
        <SessionDetailContainer>
            {sessions.map((session, i) => (
                <SessionDetail
                    key={session.id}
                >
                    <SessionStats>
                    <SessionDetailTitle>
                        {'Session ' + (i + 1)}
                    </SessionDetailTitle>
                    <SessionDetailText>
                        {'Wins: ' + session.wins}
                    </SessionDetailText>
                    <SessionDetailText>
                        {'Losses: ' + session.losses}
                    </SessionDetailText>
                    <SessionDetailText>
                        {'Sessions: ' + session.sessions}
                    </SessionDetailText>
                    <SessionDetailText>
                        {'Eggs: ' + session.eggs}
                    </SessionDetailText>
                    </SessionStats>
                    <SessionFriends>
                        <SessionDetailText>
                            {'Friends:'}
                        </SessionDetailText>
                        <GamerTagContainer>
                            {session.gamers.map((gamer) => (
                                <GamerTag 
                                    key={gamer.id}
                                    gamer={gamer}
                                />
                            ))}
                        </GamerTagContainer>
                    </SessionFriends>
                </SessionDetail>
            ))}
        </SessionDetailContainer>
    )
}