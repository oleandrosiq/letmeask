import { ButtonHTMLAttributes } from 'react';
import { ButtonDefault } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonDefault 
      className={`button ${isOutlined ? 'outlined' : "" }`} 
      {...props} 
    />
  );
}