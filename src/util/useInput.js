// let's build our hook

import { useState } from "react";

export function useInput(defaultValue, validationFn){
    const [enterdValue, setEnteredValue] = useState('');
    const [didEdit, setDidEdit] = useState(false);
    const valueIsValid = validationFn(enterdValue);
    function handleInput(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }
    function handleInputBlur() {
        setDidEdit(true);
    }
    return{
        value: enterdValue,
        handleInput,
        handleInputBlur,
        hasError: didEdit && !valueIsValid,
    };
};