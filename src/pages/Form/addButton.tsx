import { FC } from 'react'
import { FPAdd } from './styles'

interface IAddButtonProps {
    onClick: () => void
}

export const AddButton: FC<IAddButtonProps> = ({
    onClick
}) => {
    return (
        <FPAdd
            onClick={onClick}
        >
            +
        </FPAdd>
    )
}