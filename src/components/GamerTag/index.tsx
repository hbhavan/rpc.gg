import { FC } from 'react'
import { Gamer } from '../../types/core'
import { GamerBox, GamerText } from './styles'

interface IGamerTagProps {
    gamer: Gamer,
}

export const GamerTag: FC<IGamerTagProps> = ({
    gamer
}) => {
    return (
        <GamerBox>
            <GamerText
                color={`${gamer.id}`}
            >{gamer.name}</GamerText>
        </GamerBox>
)}