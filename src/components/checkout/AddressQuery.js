import { API_ENDPOINTS, useQuery } from "utilities";

const AddressQuery = (id) => {
    const url = id ? `${API_ENDPOINTS.ADDRESS}/${id}` : `${API_ENDPOINTS.ADDRESS}`
    const { data, isLoading, isError } = useQuery(url)

    return {
        data: data,
        isLoading,
        isError
    }

}

export default AddressQuery

