import fetcher from "./fetcher"
import notification from "./notification"

const swrConfig = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    errorRetryInterval: 0,
    shouldRetryOnError: true,
    errorRetryCount: 0,
    fetcher: (resource, init) => fetcher(resource, init),
    onError: (error, key) => {
        if (error.status !== 403 && error.status !== 404) {
            notification('error', error?.message)
        }
    }
}
export default swrConfig