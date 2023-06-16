import useSWR from "swr"
import fetcher from "./fetcher"

const useQuery = (url, id) => {
    const fullUrl = id ? `${url}/${id}` : url
    const { data, error } = useSWR(fullUrl, fetcher)

    const response = {
        isLoading: !data && !error,
        isError: error
    }

    if (id) {
        Object.assign(response, { data: data?.data })
    } else {
        Object.assign(response, { data: data?.data || [] })
    }
    return response
}

export default useQuery