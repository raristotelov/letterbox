const emailValidation = (value) => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!value.match(emailPattern)) {
        return "You must enter valid email adress!";
    } else  {
        return false;
    }
}

const passwordValidation = (value) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])*[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!value.match(passwordPattern)) {
        return "Minimum six characters, at least one letter and at least one number!";
    } else  {
        return false;
    }
}

const nameValidation = (value) => {
    const namePattern = /^([A-Z][a-z]+)$/;

    if (!value.match(namePattern)) {
        return "Invalid name! E.g., \"John\"";
    } else  {
        return false;
    }
}

const dayValidation = (value) => {
    value = Number(value);

    if(value >= 1 && value <= 31) {
        return false;
    } else {
        return 'Invalid day!';
    }
}

const monthValidation = (value) => {
    value = Number(value);
    
    if(value >= 1 && value <= 12) {

        return false;
    } else {

        return 'Invalid month!';
    }
} 

const yearValidation = (value) => {
    value = Number(value);

    if(value >= 1920 && value <= 2021) {
        return false
    } else {
        return 'Invalid year!';
    }
} 

const dateValidation = (value) => {
    const {day, month, year} = value;
    const date = new Date(year, month - 1, day);
    
	const isValidDate = Boolean(+date) && date.getDate() === +day;

	return isValidDate;
};

const countryValidation = (value, countries) => {
    const countryPattern = /^[a-zA-Z]{2,}$/;

    if (!value.match(countryPattern) || value === '' || !countries.includes(value)) {
        return "Choose a valid country or region!";
    } else  {
        return false;
    }
}

export const validateField = (type, value, additionalParam) => {
    switch (type) {
        case 'email':
            return emailValidation(value);
        case 'password':
            return passwordValidation(value);
        case 'firstName':
            return nameValidation(value);
        case 'lastName':
            return nameValidation(value);
        case 'year':
            return yearValidation(value);
        case 'month':
            return monthValidation(value);
        case 'day':
            return dayValidation(value);
        case 'country':
            return countryValidation(value, additionalParam);
        case 'date':
            return !dateValidation(value);
        default:
            return false;
    }
}