import { Button, Flex, PopoverContent, Text } from "@chakra-ui/react"
import { chakra } from '../../utils/chakra'

export const GamerSelectButton = chakra(Button, {
    flexDir: 'row',
    border: '1px',
    borderColor: 'zara.300',
    backgroundColor: 'zara.400',
    width: '100%',
    height: 'fit-content',
    minHeight: '2.4rem',
    variant: 'outline',
    _hover: {
        borderColor: 'zara.100',
        backgroundColor: 'zara.400'
    },
})

export const GamerSelectButtonContainer = chakra(Flex, {
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'center',
    padding: '3px'
})

export const GamerSelectContainer = chakra(Flex, {
    borderColor: 'zara.300',
    backgroundColor: 'zara.400'
})

export const GamerSelectText = chakra(Text, {
    textAlign: 'left',
})

export const GamerSelectPopoverContent = chakra(PopoverContent, {
    borderColor: "zara.100",
    borderWidth: "3px",
})

export const GamerSelectPopoverContainer = chakra(Flex, {
    flexWrap: 'wrap',
    height: 'fit-content',
    gap: 2,
    justifyContent: 'center'
})

export const GamerSelectOption = chakra(Flex, {
    width: '6rem',
    height: '2.5rem',    
    backgroundColor: 'zara.500',
    padding: '0.5rem',
    userSelect: 'none',
    cursor: 'pointer',
    _hover: {backgroundColor: 'zara.200'},
})