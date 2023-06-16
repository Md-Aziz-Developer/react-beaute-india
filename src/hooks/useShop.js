import { useSelector } from "react-redux";

const useShop = () => {
    const { info, token } = useSelector(state => state.shop)

    return {
        info,
        token,
        isLoggedIn: (info && token) ? true : false
    }
}

export default useShop