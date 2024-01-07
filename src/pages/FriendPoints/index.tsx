import { NavMenu } from '../../components/NavMenu'
import { HomeContainer, MainContainer, MainText, SubTitle, Title, TitleContainer } from './styles'
import { Rankings } from './rankings'

export const FPRankings = () => {
    return (
        <HomeContainer>
            <NavMenu page="friendPoints2023"/>
            <TitleContainer>
                <Title>
                    RPC.GG
                </Title>  
                <SubTitle>
                    Friend Point Rankings
                </SubTitle>
                <MainText>{'Friend Points = '}</MainText>
                <MainText marginLeft="2rem"> {'(Sessions * 30) + '}</MainText>
                <MainText marginLeft="2rem">{'(Wins * 10) + '}</MainText>
                <MainText marginLeft="2rem">{'(Friends * 10) - '}</MainText>
                <MainText marginLeft="2rem">{'(Losses * 30) + '}</MainText>
                <MainText marginLeft="2rem">{'(Eggs)'}</MainText>
            </TitleContainer>
            <MainContainer>
                <Rankings />
            </MainContainer>
        </HomeContainer>
    )
}