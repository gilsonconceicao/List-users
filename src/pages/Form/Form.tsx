import TextFieldInput from '../../components/TextField/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save.js';
import { AiOutlineFolderView } from 'react-icons/ai';
import { schemaValidation, defaultValue } from './Schema/validation';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './Form.module.css'
import { Link } from 'react-router-dom';
import { match } from 'assert';

type TypeDataValue = {
    name: string;
    age: number;
    email: string
}

const Form = () => {

    const { control, handleSubmit, reset, } = useForm<TypeDataValue>({
        resolver: yupResolver(schemaValidation)
    })

    const { errors } = useFormState({ control });

    const onSubmit = (data: any) => {
        let peoples = new Array();

        if (localStorage.hasOwnProperty("peoples")) {
            peoples = JSON.parse(localStorage.getItem("peoples") || '[]');
        }

        peoples.push({
            ...data,
            id: Math.random()
        });

        localStorage.setItem("peoples", JSON.stringify(peoples));

        reset(data);
        window.location.href = '/';
    };

    const onErrors = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit, onErrors)} autoComplete='off' className={styles['form_container']}>
            <h1>Cadastrar Usuários</h1>
            <TextFieldInput
                type='text'
                label='Nome'
                name='name'
                placeholder='Digite o seu nome'
                control={control}
                errors={errors.name}
            />
            <TextFieldInput
                type='number'
                label='Idade'
                name='age'
                placeholder='Digite a sua idade'
                control={control}
                errors={errors.age}
            />
            <TextFieldInput
                type='email'
                label='Email'
                name='email'
                placeholder='Digite o seu email'
                control={control}
                errors={errors.email}
            />

            <Button
                type='submit'
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<SaveIcon />}
            >
                Salvar usuário
            </Button>
            <Link
                className={styles['link_view_users']} to='/users'><AiOutlineFolderView /> Ver lista
            </Link>
        </form>
    )
}

export default Form;