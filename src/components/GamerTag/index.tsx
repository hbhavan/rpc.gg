import { Box } from "@chakra-ui/react"
import { FC } from "react"
import { Gamer } from "../../types/core"
import { GamerText } from "./styles"

interface IGamerTagProps {
    gamer: Gamer,
}

export const GamerTag: FC<IGamerTagProps> = ({
    gamer
}) => {
    return (
        <Box
            width="90px"
            borderRadius= "6px"
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.25)"
            bg={`${gamer.id}`}
        >
            <GamerText>{gamer.name}</GamerText>
        </Box>
)}