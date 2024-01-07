import { Box, Link, Flex } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const NavContainer = chakra(Flex, {
    position: 'absolute',
    gap: 8,
    right: 100
})

export const NavLinkBox = chakra(Box, {
    width: '7rem',
    textAlign: 'center'
})

export const NavLink = chakra(Link, {
    padding: '3px',
    fontFamily: 'Consolas',
    fontSize: '1.25rem'
})