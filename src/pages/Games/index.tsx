import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { NavMenu } from '../../components/NavMenu'
import { GameSelect } from '../../components/Selects/gameSelect'
import { sessionStore, toastStore } from '../../stores'
import { Game, Session } from '../../types/core'
import { Title } from '../Form/styles'
import { SessionDetails } from './sessionDetails'
import { MainContainer, SelectContainer, SessionsContainer, SubTitle, TitleContainer } from './styles'

export const GamesPage = observer(() => {

    const [selectedGame, setSelectedGame] = useState<Game>({
        id: '',
        name: '',
    })

    const [sessions, setSessions] = useState<Session[]>([])

    async function fetchSessions(gameId: string) {
        try {
            if(gameId !== '') {
                const data = await sessionStore.getSessions(gameId)
                setSessions(data)
                return data
            }
        } catch (err) {
            toastStore.errorToast(err)
        }
    }

    useEffect(() => {
        fetchSessions(selectedGame.id).then(response => {
            setSessions(response)
        })
    }, [selectedGame])
    
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
                    />
                </SelectContainer>
            </TitleContainer>
            <SessionsContainer>
                <SessionDetails
                    sessions={sessions}
                    setSessions={setSessions}
                />
            </SessionsContainer>
        </MainContainer>
)})