"use client";

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label?: string;
    htmlFor?: string;
}

export default function InputLabel({ label, htmlFor, className = "", ...props }: InputLabelProps) {
    if (!label) return null;

    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`} {...props}>
            {label}
        </label>
    );
}