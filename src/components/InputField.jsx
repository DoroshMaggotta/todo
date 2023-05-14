import React from "react";
import { useState } from 'react';
import {Button, TextField} from "@mui/material";
function InputField({ onData }) {
    const [inputValue, changeValue] = useState('');
    function handleTextareaChange(e) {
        changeValue(e.target.value);
    }

    const sendDataToParent = () => {
        const data = inputValue;

        onData(data);
        changeValue('')
    };

    return (
        <div className="inputField">
            <TextField onChange={handleTextareaChange} value={inputValue} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button onClick={sendDataToParent} variant="contained" color="success">
                Add
            </Button>
        </div>
    );
}

export default InputField;
