import { Flex, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { GamerTag } from '../../components/GamerTag'
import { gamerStore } from '../../stores'
import { Gamer } from '../../types/core'
import { GamerSelectButton, GamerSelectButtonContainer, GamerSelectOption, GamerSelectPopoverContainer, GamerSelectPopoverContent, GamerSelectText } from './styles'

interface GamerSelectProps {
    selected: Gamer[],
    setSelected: Dispatch<SetStateAction<Gamer[]>>,
    onChange: () => void
}

export const GamerSelect: FC<GamerSelectProps> = ({
    selected,
    setSelected,
    onChange
}) => {

    const gamers = gamerStore.getGamers()

    const getSelectedGamers = (): Gamer[] => {
        return (
            gamers.filter((gamer) => (selected.includes(gamer)))
        )
    }

    const handleClick = (gamer: Gamer) => {
        if(selected.includes(gamer)) {
            selected.splice(selected.indexOf(gamer), 1)
            setSelected((prevSelected) => [
                ...prevSelected
            ])
        }
        else {
            setSelected((prevSelected) => [
                ...prevSelected, 
                gamer
        ])}
    }

    return (
        <Popover
            onClose={onChange}
        >
            <PopoverTrigger>
                <GamerSelectButton>
                    <GamerSelectButtonContainer>
                        {selected.length === 0 ? 
                            <GamerSelectText color="zara.50">
                                Select gamers
                            </GamerSelectText> 
                        :
                            getSelectedGamers().map((gamer) => (
                                <GamerTag 
                                    key={gamer.id}
                                    gamer={gamer}
                                />
                            ))
                        }
                    </GamerSelectButtonContainer>
                </GamerSelectButton>    
            </PopoverTrigger>    
            <GamerSelectPopoverContent
                backgroundColor="zara.500"
            >
                <GamerSelectPopoverContainer>
                    {gamers.map((gamer) => (
                        <GamerSelectOption
                            key={gamer.id}
                            color={selected.includes(gamer) ? 'zara.100' : 'zara.300' }
                            fontWeight={selected.includes(gamer) ? 'bold' : 'normal'}
                            onClick={() => handleClick(gamer)}
                        >
                            {gamer.name}
                        </GamerSelectOption>
                    ))}
                </GamerSelectPopoverContainer>
            </GamerSelectPopoverContent>
        </Popover>
)}