import { Flex, Heading, FormLabel, Input, Button, } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'

export const MainContainer = chakra(Flex, {
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    background: 'zara.400',
    padding: '2.5rem',
    fontFamily: 'Consolas',
    overflow: 'auto'
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

