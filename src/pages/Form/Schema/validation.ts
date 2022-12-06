import {string, number, object } from "yup";

export const schemaValidation = object().shape({
  name: string().required('O campo nome é brigatório.').typeError('Campo nome é obrigatório.').min(5, 'O nome precisa conter no mínimo 5 caracteres.'), 
  age: number().required('O campo idade é obrigatório.').typeError('Campo idade é obrigatório.').min(18, 'Você precisa ser maior de idade'), 
  email: string().required('O campo e-mail é obrigatório.').typeError('campo e-mail obrigatório.').email('E-mail é inválido.')
})

export const defaultValue = {
  name: null, 
  age: null, 
  email: null  
}