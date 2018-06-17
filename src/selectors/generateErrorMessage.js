export const generateErrorMessage = (errorMsg) => {
    switch (errorMsg) {
        case 'wrong_email_or_password':
            return 'Email или пароль введены не верно';
        case 'wrong_email':
            return 'Введите корректный e-mail';
        case 'user_not_found':
            return 'Такого пользователя не существует';
        default:
            return '';
    }
};
