import { Button, Flex } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'



export const NavBarContainer = chakra(Flex, {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
})

export const NavBarButton = chakra(Button, {
    width: '120px',
    height: '50px',
    borderTop: '2px solid',
    borderRight: '2px solid',
    borderColor: 'black.300',
    borderRadius: '0px'
})