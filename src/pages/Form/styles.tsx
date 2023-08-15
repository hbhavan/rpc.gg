import { Flex, Heading, FormLabel, Input, Select, Button, Text, PopoverContent } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const MainContainer = chakra(Flex, {
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    bg: 'zara.400',
    padding: '2.5rem',
    fontFamily: 'Consolas',
})

export const FormContainer = chakra(Flex, {
    flexDir: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem'
})

export const InputContainer = chakra(Flex, {
    flexDir: 'column',
    width: '25rem',
    gap: 6,
    border: '2px',
    borderColor: 'zara.100',
    padding: '0.75rem',
    borderRadius: 8,
    backgroundColor: 'zara.500'
})

export const InputRow = chakra(Flex, {
    flexDir: 'row',
    gap: 3
})

export const TitleContainer = chakra(Flex, {
    flexDir: 'column',
})

export const Title = chakra(Heading, {
    as: 'h1',
    fontSize: '4rem',
    color: 'zara.300',
    marginBottom: '0.75rem'
})

export const FPFormLabel = chakra(FormLabel, {
    color: 'zara.100',
    fontSize: '1.5rem'
})

export const FPInput = chakra(Input, {
    borderColor: 'zara.300',
    focusBorderColor: 'zara.200',
    color: 'zara.200',
    backgroundColor: 'zara.400',
    type: 'number'
})

export const FPAdd = chakra(Button, {
    borderColor: 'zara.300',
    focusBorderColor: 'zara.200',
    color: 'zara.300',
    variant: 'outline',
    _hover: {backgroundColor: 'zara.100'}
})

export const FPSubmit = chakra(Button, {
    width: '50%',
    marginBottom: '0.5rem',
    alignSelf: 'center',
    borderColor: 'zara.300',
    focusBorderColor: 'zara.200',
    color: 'zara.200',
    backgroundColor: 'zara.400',
    variant: 'outline',
    _hover: {backgroundColor: 'zara.100'}
})

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
