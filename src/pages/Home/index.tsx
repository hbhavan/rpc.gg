import { useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { GameDetails } from '../Games'
import { gameStore } from '../../stores'
import { HomeGrid, Title } from './styles'



export const HomePage = () => {
    const [page, setPage] = useState('')

    const handleClick = (page: string) => {
        setPage(page)    
    }

    return (
        <HomeGrid>
            <Title>
                RPC 2023 Friend Points 
            </Title>  
            {!!page && page !== 'home' &&
                <GameDetails game={gameStore.getGame(page)}/>
            }
            <NavBar
                handleClick={handleClick}
            />
        </HomeGrid>
    )
}