import { Box, Text } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const GamerBox = chakra(Box, {
    width: '6.5rem',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
    border: '1px',
    borderColor: 'zara.300'
})

export const GamerText = chakra(Text, {
    fontWeight: 'bold',
    align: 'center',
})