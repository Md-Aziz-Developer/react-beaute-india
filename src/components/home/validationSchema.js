import * as yup from 'yup'

const validationSchema = yup.object({
    shop_id: yup.string('Shop field is required').required(),
    password: yup.string().required(),
})

export default validationSchema