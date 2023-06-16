import { toast } from 'react-toastify';

const notification = (type = 'info', message = 'Something went wrong') => {
    const config = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    switch (type) {
        case 'info':
            return toast.info(message, config)

        case 'success':
            return toast.success(message, config)

        case 'error':
            return toast.error(message, config)

        default:
            return toast.info(message, config)
    }
}

export default notification

