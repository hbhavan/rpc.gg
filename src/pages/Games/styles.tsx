import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const MainContainer = chakra(Box, {
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    maxHeight: '100vh',
    bg: 'zara.400',
    padding: '2.5px',
    fontFamily: 'Consolas' 
})

export const TitleContainer = chakra(Flex, {
    flexDir: 'column',
})

export const Title = chakra(Heading, {
    as: 'h1',
    fontSize: '4rem',
    color: 'zara.300',
    fontFamily: 'Consolas'
})

export const SubTitle = chakra(Heading, {
    as: 'h3',
    fontSize: '2rem',
    color: 'zara.200',
    fontFamily: 'Consolas' 
})