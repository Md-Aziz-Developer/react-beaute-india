import useSWR from 'swr'
import API_ENDPOINTS from 'utilities/apiEndpoints'

const LoginQuery = (values) => {
    const { data, error } = useSWR(API_ENDPOINTS.LOGIN, { type: 'POST' })

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
export default LoginQuery