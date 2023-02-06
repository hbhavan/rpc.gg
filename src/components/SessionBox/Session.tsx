import { AddIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { Button, Divider, GridItem, HStack, IconButton, Input, Spacer, Text } from "@chakra-ui/react"
import { FC, useState } from "react"
import { Game, Gamer } from "../../types/core"
import { GamerMenu } from "../GamerMenu"
import { GamerTag } from "../GamerTag"
import { 
    SessionBox, 
    SessionDate,
    SessionBoxLeft, 
    SessionBoxRight,
    SessionInputs, 
    SessionInput, 
    SessionText, 
    SessionHeading,
    AddButton,
    FriendPointText
} from "./styles"

interface ISessionProps {
    game: Game,
    eggs: boolean
}

export const Session: FC<ISessionProps> = ({
    game,
    eggs
}) => {

    const [gamers, setGamers] = useState<Gamer[]>([]) 

    const handleClick = (gamer: Gamer) => {
        if(!gamers.includes(gamer))
            setGamers((prev) => [...prev, gamer])
    }
    
    const handleRemove = (gamer: Gamer) => {
        gamers.splice(gamers.indexOf(gamer), 1)
        setGamers((prev) => [...prev])
    }
    
    return (
        <SessionBox>     
            <SessionHeading>
                    <SessionDate>Jan 31st</SessionDate>
                    <Divider/>
            </SessionHeading>
            <SessionBoxLeft>
                <SessionInputs>
                    <SessionText>Sessions</SessionText>
                    <SessionInput/>
                    <SessionText>Victories</SessionText>
                    <SessionInput/>
                    <SessionText>Friends</SessionText>
                    <SessionInput/>
                    <SessionText>Losses</SessionText>
                    <SessionInput/>
                    {eggs && 
                        <>
                            <SessionText>Eggs</SessionText>
                            <SessionInput/>
                        </>
                    }
                    <SessionText>Friend Points</SessionText>
                    <FriendPointText>0</FriendPointText>
                </SessionInputs>
            </SessionBoxLeft>
            <SessionBoxRight>
                <>
                    <HStack paddingRight="8px">
                        <SessionText>Gamers</SessionText>
                        <Spacer/>
                        <GamerMenu 
                            handleClick={handleClick}
                        />
                    </HStack>
                    <Divider />
                    {!!gamers && gamers.map((gamer) => (
                        <HStack key={gamer.id} padding="2px 8px 2px 2px">
                            <GamerTag gamer={gamer}/>
                            <Spacer />
                            <SmallCloseIcon 
                                cursor="pointer"
                                onClick={() => handleRemove(gamer)}
                            />
                        </HStack>
                    ))}
                </>
            </SessionBoxRight>
        </SessionBox>
)}