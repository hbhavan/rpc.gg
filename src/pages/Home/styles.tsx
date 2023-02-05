import { Grid, Box, Heading } from "@chakra-ui/react";
import { chakra } from "../../utils/chakra";


export const HomeGrid = chakra(Box, {
    padding: '20px',
    width: '100%',
    height: '100vh',
    bg: 'black.100'
})

export const Title = chakra(Heading, {
    as: 'h1',
    color: 'white'
})