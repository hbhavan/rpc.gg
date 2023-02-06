import { AddIcon } from '@chakra-ui/icons'
import { FC } from 'react'
import { gameStore } from '../../stores'
import { Game } from '../../types/core'
import { NavBarButton, NavBarContainer } from './styles'

interface INavBarProps {
    handleClick: (game: string) => void
}

export const NavBar: FC<INavBarProps> = ({
    handleClick
}) => {
    const games = gameStore.getGameList()

    return (
        <NavBarContainer>
            <NavBarButton
                onClick={() => {handleClick('home')}}
            >
                Home
            </NavBarButton>
            {games.map((game) => (
                <NavBarButton
                    key={game.id}
                    onClick={() => {handleClick(game.id)}}
                >
                    {game.name}
                </NavBarButton>
            ))}
            <NavBarButton>
                <AddIcon />
            </NavBarButton>

        </NavBarContainer>
    )
}