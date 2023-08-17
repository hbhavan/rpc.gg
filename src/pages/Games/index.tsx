import { useEffect, useState } from 'react'
import { NavMenu } from '../../components/NavMenu'
import { GameSelect } from '../../components/Selects/gameSelect'
import { sessionStore } from '../../stores'
import { Game, Session } from '../../types/core'
import { Title } from '../Form/styles'
import { SessionDetails } from './sessionDetails'
import { MainContainer, SelectContainer, SessionsContainer, SubTitle, TitleContainer } from './styles'

export const GamesPage = () => {
    const [selectedGame, setSelectedGame] = useState<Game>({
        id: '',
        name: '',
    })

    const [sessions, setSessions] = useState<Session[]>([])

    const handleSelectGame = () => {
        getSessions(selectedGame.id)
    }

    async function getSessions(gameId: string) {
        try {
            const data = await sessionStore.getSessions(gameId)
            setSessions(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }  

    return (
        <MainContainer>
            <NavMenu page="games"/>
            <TitleContainer>
                <Title>
                    Games
                </Title>
                <SubTitle>
                    Select a game
                </SubTitle>
                <SelectContainer>
                    <GameSelect 
                        selected={selectedGame}
                        setSelected={setSelectedGame}
                        onChange={handleSelectGame}
                    />
                </SelectContainer>
            </TitleContainer>
            <SessionsContainer>
                <SessionDetails
                    sessions={sessions}
                />
            </SessionsContainer>
        </MainContainer>
)}