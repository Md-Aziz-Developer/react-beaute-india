import { API_ENDPOINTS, useQuery } from "utilities";

const DefaultAddressQuery = () => {
    const { data, isLoading, isError } = useQuery(`${API_ENDPOINTS.ADDRESS}/default`)

    return {
        data: data,
        isLoading,
        isError
    }

}

export default DefaultAddressQuery

