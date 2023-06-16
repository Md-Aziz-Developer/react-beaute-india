import { API_ENDPOINTS, useQuery } from "utilities";

const BrandQuery = () => {
    const { data, isLoading, isError } = useQuery(API_ENDPOINTS.BRAND)

    return {
        brands: data || [],
        isLoading,
        isError
    }

}

export default BrandQuery

