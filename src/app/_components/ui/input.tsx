"use client";

import { useState } from "react";
import InputLabel from "./label";

const helperClass = "text-sm text-gray-600";
const inputClass = "mt-1 w-full border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
const showLengthClass = "text-xs text-gray-400 mt-0.5 text-right";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
}

export function Input({id, label, helperText, placeholder, value: externalValue, onChange: externalOnChange, maxLength, ...props}: InputProps) {
    const [value, setValue] = useState(externalValue?.toString() ?? "");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (externalOnChange) externalOnChange(e);
    };
    
    return(
        <div className="mb-4">
            <InputLabel htmlFor={id} label={label} />
            {helperText && <p className={helperClass}>{helperText}</p>}
            <input
                id={id}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                placeholder={placeholder}
                className={inputClass}
                {...props}
            />
            {maxLength && (
                <p className={showLengthClass}>
                    {`${(value?.toString().length ?? 0)} / ${maxLength}`}
                </p>
            )}
        </div>
    )
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
}

export function TextArea({id, label, helperText, value: externalValue, onChange: externalOnChange, maxLength, placeholder, ...props}: TextAreaProps) {
    const [value, setValue] = useState(externalValue?.toString() ?? "");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        if (externalOnChange) externalOnChange(e);
    };

    return(
        <div className="mb-4">
            <InputLabel htmlFor={id} label={label} />
            {helperText && <p className={helperClass}>{helperText}</p>}
            <textarea
                id={id}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                placeholder={placeholder}
                className={inputClass}
                {...props}
            />
            {maxLength && (
                <p className={showLengthClass}>
                    {`${(value?.toString().length ?? 0)} / ${maxLength}`}
                </p>
            )}
        </div>
    )
}