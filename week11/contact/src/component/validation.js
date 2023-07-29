import * as yup from 'yup';
import validation from '../utils/validation';
const validate = validation({
    name: yup.string().required().min(2).max(9),
    email: yup.string().required().email()
}
)

export default validate;