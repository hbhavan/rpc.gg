import { Button, ModalContent, ModalFooter, ModalHeader, Text } from '@chakra-ui/react'
import { chakra } from '../../utils/chakra'


export const CustomModalContent = chakra(ModalContent, {
    border: '2px',
    borderColor: 'zara.100',
    padding: '0.75rem',
    borderRadius: 8,
    backgroundColor: 'zara.500'
})

export const CustomModalHeader = chakra(ModalHeader, {
    as: 'h2',
    fontSize: '2rem',
    color: 'zara.300',
})

export const CustomModalText = chakra(Text, {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'zara.200',
})

export const CustomModalFooter = chakra(ModalFooter, {
    justifyContent: 'center',
    gap: 5
})

export const ConfirmButton = chakra(Button, {
    width: '30%',
    marginBottom: '0.5rem',
    alignSelf: 'center',
    borderColor: 'zara.300',
    focusBorderColor: 'zara.200',
    color: 'zara.200',
    backgroundColor: 'zara.400',
    variant: 'outline',
    _hover: {backgroundColor: 'zara.300'}
})

export const CloseButton = chakra(Button, {
    width: '30%',
    marginBottom: '0.5rem',
    borderColor: 'zara.300',
    focusBorderColor: 'zara.200',
    color: 'zara.500',
    backgroundColor: 'zara.100',
    variant: 'outline',
    _hover: {backgroundColor: 'zara.300'}
})
