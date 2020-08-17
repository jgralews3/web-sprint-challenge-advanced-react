import React from 'react';

const useForm = (initialValue) => {
    const [values, setValues] = React.useState(initialValue)
    console.log(values);
    const handleChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return [values, handleChanges]
}

export default useForm;