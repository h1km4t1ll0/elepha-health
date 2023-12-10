interface yupError {
  path: string;
  message: string
}

interface yupScheme {
  validateSync: Function;
}

export const validate = (scheme: object, data: object): object => {
  try {
    (scheme as yupScheme).validateSync(data);
    return {}
  } catch (e) {
    return { [(e as yupError).path]: (e as yupError).message }
  }
}