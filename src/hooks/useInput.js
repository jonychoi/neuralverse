import {useState} from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      setValue(e)
    };
    return { value, onChange };
};

export default useInput;