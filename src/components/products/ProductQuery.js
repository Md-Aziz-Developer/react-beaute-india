import { API_ENDPOINTS, useQuery } from "utilities";

const ProductQuery = (id) => {

    const url = id ? `${API_ENDPOINTS.PRODUCT}/${id}` : `${API_ENDPOINTS.PRODUCT}${window.location.search}`
    const { data, isLoading, isError } = useQuery(url)

    return {
        data: data,
        isLoading,
        isError
    }

}

export default ProductQuery

