import { Button, Grid, GridItem, HStack, Input, Text } from "@chakra-ui/react";
import { chakra } from "../../utils/chakra";

export const SessionBox = chakra(Grid, {
    width: '450px',
    padding: '8px',
    templateColumns:  'repeat(3, 1fr)',
    border: '3px solid',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)'
})

export const SessionHeading = chakra(GridItem, {
    colSpan: 3,
    marginBottom: '5px'
})

export const SessionBoxLeft = chakra(GridItem, {
    colSpan: 2,
})

export const SessionInputs = chakra(Grid, {
    templateColumns:  'repeat(2, 1fr)',
    templateRows: 'repeat(6, 1fr)'
})

export const SessionDate = chakra(Text, {
    variant: 'h3',
    color: 'white',
    fontWeight: 'bold',
    align: 'center',
})

export const SessionRow = chakra(HStack, {
    padding: '4px',
})

export const SessionText = chakra(Text, {
    color: 'white.100',
})

export const FriendPointText = chakra(Text, {
    color: 'white.100',
    fontWeight: 'bold',
    align: 'right'
})

export const SessionInput = chakra(Input, {
    padding: '2px',
    size: 'sm'
})

export const SessionBoxRight = chakra(GridItem, {
    colSpan: 1,
    paddingLeft: '8px',
})

export const AddButton = chakra(Button, {
    boxSize: '25px'
})