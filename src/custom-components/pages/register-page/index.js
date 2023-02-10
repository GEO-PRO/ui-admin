const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = (value, msg) => {
    if (formatEmail.test(value)) {
        msg['emailRegister'] = '';
    } else {
        msg['emailRegister'] = 'Invalid Email Address';
    }
    return msg['emailRegister']
}

const validatePassword = (msg, passRegister, passConfirmRegister) => {
    if (passRegister == passConfirmRegister) {
        msg['passConfirmRegister'] = '';
    } else {
        msg['passConfirmRegister'] = 'The password confirmation does not match.';
    }

    return msg['passConfirmRegister']
}

const validateUser = (value, msg) => {
    if (value.length != 0) {
        msg['userRegister'] = '';
    } else {
        msg['userRegister'] = 'Username not null'
    }
}

export {
    validateEmail,
    validatePassword,
    validateUser,
    formatEmail
}