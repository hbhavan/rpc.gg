import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const HomeContainer = chakra(Flex, {
    flexDir: 'column',
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    maxHeight: '100vh',
    bg: 'zara.400',
    padding: '2.5rem',
    fontFamily: 'Consolas' 
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

export const MainContainer = chakra(Flex, {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
})

export const RankingContainer = chakra(Flex, {
    flexDir: 'column',
    gap: 2
})

export const RankingRow = chakra(Flex, {
    flexDir: 'row',
    width: '300%'
})

export const PointsBox = chakra(Box, {
    width: '12.5rem',
    textAlign: 'right'
})

export const Points = chakra(Text, {
    fontSize: '1rem',
    color: 'zara.100'
})