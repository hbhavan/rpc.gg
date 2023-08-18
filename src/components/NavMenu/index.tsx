import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { navLinks } from './mock'
import { NavLink, NavContainer, NavLinkBox } from './styles'

interface NavMenuProps {
    page: string
}

export const NavMenu: FC<NavMenuProps> = ({
    page
}) => {

    const navigate = useNavigate()

    return (
        <NavContainer>
            {navLinks.map((link) => (
                <NavLinkBox
                    key={link.id}
                    color={page === link.id ? 'zara.100' : 'zara.300'}
                    border={page === link.id ? '1px' : '0px'}
                    borderRadius="8px"
                >
                    <NavLink
                        onClick={() => {
                            navigate(link.nav)
                        }}
                        color={page === link.id ? 'zara.100' : 'zara.300'}
                    >
                        {link.name}
                    </NavLink>
                </NavLinkBox>
            ))}
        </NavContainer>
    )}