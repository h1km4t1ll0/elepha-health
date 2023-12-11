import Toast from "react-native-toast-message";

export const showWrongCredentialsToast = () => {
    Toast.show({
        type: 'error',
        text1: 'Ошибка!',
        text2: 'Неверный логин или пароль',
        autoHide: true,
    });
}

export const showErrorToast = (errorMessage?: string, position: 'bottom' | 'top' = 'top', bottomOffset: number = 40) => {
    Toast.show({
        type: 'error',
        text1: 'Ошибка!',
        text2: errorMessage ? errorMessage : 'Попробуйте снова!',
        autoHide: true,
        position,
        bottomOffset,
    });
}

export const showSuccessToast = (successMessage?: string) => {
    Toast.show({
        type: 'success',
        text1: 'Успешно!',
        text2: successMessage ? successMessage : 'Данные отправлены!',
        autoHide: true,
    });
}