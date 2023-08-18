import { useToast } from "@chakra-ui/toast"
import { ToastContainer, ToastText, ToastTitle } from "./styles"

export interface IToastProps {
    title: string,
    message: string,
}

export const useCustomToast = () => {
    const toast = useToast()

    return (toastProps: IToastProps) => {
        const {title, message} = toastProps

        return toast ({
            render: () => {
                return (
                    <ToastContainer
                        margin={'0 0 30% 0'}
                    >
                        <ToastTitle>
                            {title}
                        </ToastTitle>
                        <ToastText>
                            {message}
                        </ToastText>
                    </ToastContainer>
            )}, duration: 3000
        })
    }
}