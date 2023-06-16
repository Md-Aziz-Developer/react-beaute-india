import { API_ENDPOINTS, useQuery } from "utilities";

const SizeQuery = () => {
    const { data, isLoading, isError } = useQuery(API_ENDPOINTS.SIZE)

    return {
        sizes: data || [],
        isLoading,
        isError
    }

}

export default SizeQuery

