import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const registerValidations = yup.object().shape({
  password: yup.string().required('Введите пароль'),
  phoneNumber: yup.string()
      .required('Укажите номер телефона')
      .matches(phoneRegExp, 'Укажите корректный номер телефона'),
  email: yup.string()
      .required('Укажите электронную почту')
      .email('Укажите корректную электронную почту'),
  lastName: yup.string().required('Укажите фамилию'),
  firstName: yup.string().required('Укажите имя')
});
