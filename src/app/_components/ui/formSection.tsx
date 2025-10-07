"use client";

interface FormSectionProps {
    title?: string;
    children: React.ReactNode;
}

export default function FormSection({title, children}: FormSectionProps) {
    return(
        <section className="bg-white p-4">
            {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
            {children}
        </section>
    )
}