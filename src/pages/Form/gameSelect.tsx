import { Box, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { gameStore } from '../../stores'
import { Game } from '../../types/core'
import { GamerSelectButton, GamerSelectButtonContainer, GamerSelectOption, GamerSelectText } from './styles'

interface GameSelectProps {
    selected: Game,
    setSelected: Dispatch<SetStateAction<Game>>,
    onChange: () => void
}

export const GameSelect: FC<GameSelectProps> = ({
    selected,
    setSelected,
    onChange
}) => {

    const games = gameStore.getGameList()

    const handleClick = (game: Game) => {
        setSelected(game)
        onChange()
    }

    return (
        <Popover>
            <PopoverTrigger>
                <GamerSelectButton>
                    <GamerSelectButtonContainer>
                        <GamerSelectText
                            color={selected.id === '' ? 'zara.50' : 'zara.300'}
                        >
                            {selected.id === '' ?
                                "Select game" :
                                selected.name
                            }
                        </GamerSelectText>
                    </GamerSelectButtonContainer>
                </GamerSelectButton>    
            </PopoverTrigger>    
            <PopoverContent
                backgroundColor="zara.500"
            >
                {games.map((game) => (
                    <GamerSelectOption
                        width="100%"
                        key={game.id}
                        color={selected === game ? 'zara.100' : 'zara.300' }
                        fontWeight={selected === game ? 'bold' : 'normal'}
                        onClick={() => handleClick(game)}
                    >
                        {game.name}
                    </GamerSelectOption>))}
            </PopoverContent>
        </Popover>
)}