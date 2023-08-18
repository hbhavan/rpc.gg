import { makeAutoObservable } from "mobx";
import { IToastProps } from "../components/Hooks/useCustomToast";


export class ToastStore {
    public toast: (toastProps: IToastProps) => void = () => {}

    constructor() {
        makeAutoObservable(this)
    }

    public setToast(toast: (toastProps: IToastProps) => void){
        this.toast = toast
    }

    public submitToast() {
        this.toast({
            title: 'Success',
            message: 'Session successfully submitted'
        })
    }

    public deleteToast() {
        this.toast({
            title: 'Success',
            message: 'Session successfully deleted'
        })
    }

    public customErrorToast(message: string) {
        this.toast({
            title: 'Error',
            message: message
        })
    }

    public errorToast(err: any) {
        const errorData = err?.response?.data
        let errorMessage = 'Something went wrong'

        if(errorData[0]?.message) {
            errorMessage = errorData[0]?.message
        } else {
            errorMessage = errorData?.message || errorData.title
        }

        this.toast({
            title: 'Error',
            message: errorMessage
        })
    }

    public clearToast() {
        this.toast = () => {}
    }
}