import { Flex, Heading, VStack } from "@chakra-ui/react";
import { chakra } from "../../utils/chakra";

export const GameDetailsContainer = chakra(Flex, {
    padding: '20px',
    flexDirection: 'column'
})

export const GameTitle = chakra(Heading, {
    as: 'h2',
    size: 'lg',
    color: 'white',
    marginBottom: '10px'
})

export const Sessions = chakra(Flex, {
})