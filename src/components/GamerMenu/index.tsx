import { AddIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FC } from "react"
import { gamerStore } from "../../stores"
import { Gamer } from "../../types/core"
import { GamerTag } from "../GamerTag"

interface IGamerMenuProps {
    handleClick: (gamer: Gamer) => void
}

export const GamerMenu: FC<IGamerMenuProps> = ({
    handleClick
}) => {

    const gamers = gamerStore.getGamers()

    return (
        <Menu>
            <MenuButton>
                <AddIcon />
            </MenuButton>
            <MenuList>
                {!!gamers && gamers.map((gamer) => {
                    return (
                        <MenuItem
                            onClick={() => handleClick(gamer)}
                        >
                            <GamerTag gamer={gamer}/>
                        </MenuItem>
                )})}
            </MenuList>
        </Menu>
)}