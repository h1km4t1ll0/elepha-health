import * as yup from 'yup';

export const loginValidations = yup.object().shape({
  password: yup.string().required('Введите пароль'),
  email: yup.string()
      .required('Укажите электронную почту')
      .email('Укажите корректную электронную почту'),
})