import { Spinner } from "react-bootstrap"

const Button = ({ isLoading, className, type = 'button', label }) => {
    return (
        <button type={type} disabled={isLoading} className={className}>
            {isLoading ?
                <Spinner animation="border" size="sm" /> :
                label
            }
        </button>
    )
}

export default Button