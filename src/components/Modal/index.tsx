import { Modal, ModalOverlay } from "@chakra-ui/react"
import { FC } from "react"
import { ConfirmButton, CloseButton, CustomModalContent, CustomModalFooter, CustomModalHeader, CustomModalText } from "./styles"

interface IModalProps {
    isOpen: boolean,
    onClose: () => void,
    onConfirm: () => void,
    title: string,
    body: string,
    subtext?: string
}

export const CustomModal: FC<IModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    body,
    subtext
}) => {
    const handleConfirm = () => {
        onConfirm()
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <CustomModalContent>
                <CustomModalHeader>{title}</CustomModalHeader>
                <CustomModalText>{body}</CustomModalText>
                <CustomModalText>{subtext}</CustomModalText>
                <CustomModalFooter>
                    <ConfirmButton
                        onClick={handleConfirm}
                    >
                        Confirm
                    </ConfirmButton>
                    <CloseButton
                        onClick={onClose}
                    >
                        Cancel
                    </CloseButton>
                </CustomModalFooter>
            </CustomModalContent>
        </Modal>
    )
}