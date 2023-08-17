import axios, { AxiosInstance, AxiosRequestConfig} from 'axios'

const DEV_PORT = 7062

function getBaseUrl(env: string): string {
    if(env === 'dev')
        return `https://localhost:${DEV_PORT}`
    if(env === 'prod')
        return 'https://rpc-friendpoints-api.azurewebsites.net'
    else
        return ''
}

const BASE_URL = getBaseUrl('prod')

function createInstance(
    url: string,
    baseURL: string = BASE_URL,
    config: AxiosRequestConfig & { baseURL?: never } = {}
): AxiosInstance {
    const instance = axios.create({
        baseURL: baseURL + url,
        ...config
    })

    return instance
}

export const gamersInstance = createInstance('/api/Gamer')
export const gameInstance = createInstance('/api/Game')
export const sessionInstance = createInstance('/api/Session')