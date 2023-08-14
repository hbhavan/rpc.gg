import { useState } from 'react'
import { NavMenu } from '../../components/NavMenu'
import { HomeContainer, MainContainer, SubTitle, Title, TitleContainer } from './styles'
import { Rankings } from './rankings'

export const HomePage = () => {
    const [page, setPage] = useState('')

    const handleClick = (page: string) => {
        setPage(page)    
    }

    return (
        <HomeContainer>
            <NavMenu page="home"/>
            <TitleContainer>
                <Title>
                    RPC.GG
                </Title>  
                <SubTitle>
                    2023 Friend Point Rankings
                </SubTitle>
            </TitleContainer>
            <MainContainer>
                <Rankings />
            </MainContainer>
        </HomeContainer>
    )
}