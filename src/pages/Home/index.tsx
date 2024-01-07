import { NavMenu } from '../../components/NavMenu'
import { HomeContainer, MainContainer, MainText, SubTitle, Title, TitleContainer } from './styles'

export const HomePage = () => {
    return (
        <HomeContainer>
            <NavMenu page="home"/>
            <TitleContainer>
                <Title>
                    RPC.GG
                </Title>  
                <SubTitle>
                    Welcome!
                </SubTitle>
            </TitleContainer>
            <MainContainer>
            </MainContainer>
        </HomeContainer>
    )
}
