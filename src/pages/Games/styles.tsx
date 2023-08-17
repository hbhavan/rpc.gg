import { Flex, Heading, Text } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const MainContainer = chakra(Flex, {
    flexDir: 'column',
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    maxHeight: '100vh',
    bg: 'zara.400',
    padding: '2.5rem',
    fontFamily: 'Consolas',
    overflow: 'auto', 
})

export const TitleContainer = chakra(Flex, {
    flexDir: 'column',
})

export const Title = chakra(Heading, {
    as: 'h1',
    fontSize: '4rem',
    color: 'zara.300',
})

export const SubTitle = chakra(Heading, {
    as: 'h3',
    fontSize: '2rem',
    color: 'zara.200',
})

export const SelectContainer = chakra(Flex, {
    width: '20rem',
    padding: '1rem'
})

export const SessionsContainer = chakra(Flex, {
    width: '100%',
    height: '100%',
})

export const SessionDetailContainer = chakra(Flex, {
    flexDir: 'row',
    flexWrap: 'wrap',
    gap: 6,
})

export const SessionDetail = chakra(Flex, {
    flexDir: 'row',
    width: '30rem',
    height: '20rem',
    border: '2px',
    borderColor: 'zara.100',
    padding: '0.75rem',
    borderRadius: 8,
    backgroundColor: 'zara.500'
})

export const SessionStats = chakra(Flex, {
    flexDir: 'column',
    width: '50%'
})
export const SessionFriends = chakra(Flex, {
    flexDir: 'column',
    width: '50%'
})

export const GamerTagContainer = chakra(Flex, {
    flexDir: 'column',
    flexWrap: 'wrap',
    gap: 2,
})

export const SessionDetailTitle = chakra(Heading, {
    as: 'h4',
    color: 'zara.200',
    fontSize: '1.75rem'
})

export const SessionDetailText = chakra(Text, {
    color: 'zara.100',
    fontSize: '1.5rem'
})