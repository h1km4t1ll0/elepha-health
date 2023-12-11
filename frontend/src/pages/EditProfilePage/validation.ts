import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const editValidations = yup.object().shape({
  phone_number: yup.string()
      .required('Указать номер телефона')
      .matches(phoneRegExp, 'Укажите корректный номер телефона')
  ,
  email: yup.string()
      .required('Укажите электронную почту')
      .email('Укажите корректную электронную почту'),
  second_name: yup.string().required('Укажите фамилию'),
  first_name: yup.string().required('Укажите имя')
});