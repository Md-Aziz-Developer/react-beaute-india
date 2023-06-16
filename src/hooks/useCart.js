import { useSelector } from "react-redux"

const useCart = () => {
    const { data, subTotal, total, totalQuantity } = useSelector(state => state.cart)

    return {
        items: data,
        subTotal,
        total,
        totalQuantity
    }

}

export default useCart