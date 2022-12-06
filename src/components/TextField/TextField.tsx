import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form'
import { InputProps } from './type';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootInput: {
      marginTop: '10px',
      width: '100%',
    },
  }),
);

const TextFieldInput = ({ name, type, label, errors, placeholder, control }: InputProps) => {
  const classes = useStyles();

  return (
    <>
      <Controller render={({ field }) => (
        <TextField
          {...field}
          className={classes.rootInput}
          id="outlined-basic"
          variant="outlined"
          label={label}
          type={type}
          placeholder={placeholder}
        />

      )}
        name={name}
        control={control}
      />
      <p className='message_error'>{errors && errors?.message}</p>

    </>
  )
}

export default TextFieldInput