import {FieldError} from 'react-hook-form'; 

export interface InputProps {
  label: string; 
  name: string; 
  type: string; 
  placeholder: string, 
  errors?: FieldError;    
  control?: any; 
}