"use client";

import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import InputLabel from "./label";

const helperClass = "text-sm text-gray-600";

interface ColorPickerProps {
    id?: string;
    label?: string;
    helperText?: string;
    defaultColor?: string;
    onChange?: (color: string) => void;
}

export default function ColorPicker({id, label, helperText, defaultColor, onChange}: ColorPickerProps) {
    const [color, setColor] = useState(defaultColor ?? "#000000");
    const [isOpen, setIsOpen] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
        onChange?.(newColor);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {document.addEventListener("mousedown", handleClickOutside);}
        else {document.removeEventListener("mousedown", handleClickOutside);}
        return () => {document.removeEventListener("mousedown", handleClickOutside);};
    }, [isOpen]);

    return(
        <div className="mb-4" ref={pickerRef}>
            <InputLabel htmlFor={id} label={label}/>
            {helperText && <p className={helperClass}>{helperText}</p>}
            <div className="mt-2 relative w-fit">
                <button type="button" style={{ backgroundColor: color }} onClick={() => setIsOpen((prev) => !prev)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 rounded-md border shadow-sm"/>
                <input id={id} type="text" value={color} onChange={(e) => handleColorChange(e.target.value)}
                    className="w-full rounded-md border p-2 pl-10 text-sm"/>
            </div>
            {isOpen && (
                <div className="absolute z-10 mt-2 rounded-md border bg-white p-2 shadow-md">
                    <HexColorPicker color={color} onChange={handleColorChange} />
                </div>
            )}
        </div>
    )
}
