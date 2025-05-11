// useInputState.js
import { useState } from "react";

const useInputState = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    console.log(value);
    return {
        value,
        onChange: handleChange, // ✅ key name 'onChange' dite hobe
    };
};

export default useInputState;
