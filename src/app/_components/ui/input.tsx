"use client";

import { useState } from "react";
import InputLabel from "./label";

const helperClass = "text-sm text-gray-600";
const inputClass = "mt-1 w-full border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
const showLengthClass = "text-xs text-gray-400 mt-0.5 text-right";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    showlength?: boolean;
}

export function Input({id, label, helperText, showlength, placeholder, value: externalValue, onChange: externalOnChange, maxLength, ...props}: InputProps) {
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
            {showlength && (
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
    showlength?: boolean;
}

export function TextArea({id, label, helperText, showlength, value: externalValue, onChange: externalOnChange, maxLength, placeholder, ...props}: TextAreaProps) {
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
            {showlength && (
                <p className={showLengthClass}>
                    {`${(value?.toString().length ?? 0)} / ${maxLength}`}
                </p>
            )}
        </div>
    )
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {label: string;}

export function Checkbox({id, name, label, checked: externalChecked, value, onChange: externalOnChange, ...props}: CheckboxProps) {
    const [checked, setChecked] = useState(!!externalChecked);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        if (externalOnChange) externalOnChange(e);
    };
    
    return(
        <label htmlFor={id} className="flex items-center gap-2 mb-3 font-medium hover:bg-gray-100">
            <input type="hidden" name={name} value="0" autoComplete="off" />
            <input id={id} name={name} type="checkbox" value={value} checked={checked} onChange={handleChange} {...props}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"/>
            <span>{label}</span>
        </label>
    )
}