import {Popover, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { gameStore } from '../../stores'
import { Game } from '../../types/core'
import { GamerSelectButton, GamerSelectButtonContainer, GamerSelectOption, GamerSelectPopoverContent, GamerSelectText } from './styles'

interface GameSelectProps {
    selected: Game,
    setSelected: Dispatch<SetStateAction<Game>>,
}

export const GameSelect: FC<GameSelectProps> = ({
    selected,
    setSelected,
}) => {

    const [gameList, setGameList] = useState<Game[]>([])
    const {isOpen, onOpen, onClose} = useDisclosure()

    useEffect(() => {
        async function getGames() {
            try {
                const data = await gameStore.getGameList()
                setGameList(data)
            } catch (err) {
                console.error(err)
                setGameList([])
            }
        }

        getGames()
    }, [])

    return (
        <Popover
            isOpen={isOpen}
            closeOnBlur
        >
            <PopoverTrigger>
                <GamerSelectButton
                    onClick={onOpen}
                >
                    <GamerSelectButtonContainer>
                        <GamerSelectText
                            color={selected.id === '' ? 'zara.50' : 'zara.200'}
                        >
                            {selected.id === '' ?
                                "Select game" :
                                selected.name
                            }
                        </GamerSelectText>
                    </GamerSelectButtonContainer>
                </GamerSelectButton>    
            </PopoverTrigger>    
            <GamerSelectPopoverContent>
                {gameList.map((game) => (
                    <GamerSelectOption
                        width="100%"
                        padding="8px"
                        key={game.id}
                        color={selected === game ? 'zara.100' : 'zara.300' }
                        fontWeight={selected === game ? 'bold' : 'normal'}
                        onClick={() => {
                            setSelected(game)
                            onClose()
                        }}
                    >
                        {game.name}
                    </GamerSelectOption>))}
            </GamerSelectPopoverContent>
        </Popover>
)}