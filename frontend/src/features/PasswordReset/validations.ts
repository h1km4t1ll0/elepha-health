import * as yup from 'yup';

export const emailValidation =  yup.object().shape({
  email: yup.string()
      .required('Укажите электронную почту')
      .email('Укажите корректную электронную почту')
});

export const passwordValidations =  yup.object().shape({
  password: yup.string().required('Введите пароль'),
  repeat: yup.string().oneOf([yup.ref('password'), undefined], 'Пароли не совпадают')
});