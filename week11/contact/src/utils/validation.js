import { setLocale } from "yup";
import * as yup from 'yup';
setLocale({
    mixed:{
        required: (props) => `truong ${props.path} khong de trong`
    },
})

const validation = (validateObject) => yup.object().shape(validateObject)

export default validation