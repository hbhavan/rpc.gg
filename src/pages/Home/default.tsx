import { useNavigate } from 'react-router-dom'
import { NavLink } from "../../components/NavMenu/styles"
import { HomeContainer, SubTitle, Title, TitleContainer } from "./styles"



export const DefaultPage = () => {
    const navigate = useNavigate()
   
    return (
        <HomeContainer
            flexDir="column"
            justifyContent="center"
            alignItems="center"
        >
                <Title>
                    Work In Progress
                </Title>
                <SubTitle>
                    For the RPC Friend Point rankings, please go here
                </SubTitle>
                <NavLink
                    onClick={() => {
                        navigate('/rpc/friendPoints2023')
                    }}
                    color="zara.300"
                >
                    {'[gearetical.com/rpc/friendPoints2023]'}
                </NavLink>
        </HomeContainer>
)}