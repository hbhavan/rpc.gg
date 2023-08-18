import { Flex, Heading, Text } from "@chakra-ui/react";
import { chakra } from "../../utils/chakra";

export const ToastContainer = chakra(Flex, {
    flexDir: 'column',
    border: '2px',
    borderRadius: 8,
    borderColor: 'zara.300',
    padding: '0.75rem',
    background: 'zara.100',
    fontFamily: 'Consolas',
})

export const ToastTitle = chakra(Heading, {
    as: 'h2',
    fontSize: '1.5rem',
    color: 'zara.500',
})

export const ToastText = chakra(Text, {
    fontSize: '1rem',
    color: 'zara.500',
})