import * as yup from 'yup'

export const pulseValidations = yup.object().shape({
  pulse: yup.number()
      .required('Нужно указать пульс')
      .min(20, 'Пульс должен быть не меньше 20')
      .max(240, 'Пульс не может превышать 240')
})