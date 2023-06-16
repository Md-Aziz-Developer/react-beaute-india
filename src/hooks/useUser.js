import { useSelector } from "react-redux";

const useUser = () => {
    const { user, accessToken } = useSelector(state => state.auth)

    return {
        user,
        accessToken,
        isUserLoggedIn: (user && accessToken) ? true : false
    }
}

export default useUser