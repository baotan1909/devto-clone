"use client";
import { Slot } from "@radix-ui/react-slot";

type Variant = | "default" | "primary" | "secondary" | "outline" | "ghost" | "social" | "danger"
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: Variant;
    size?: Size;
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    bgClass?: string;
    bgColor?: string;
    fullWidth?: boolean;
}

export function Button({
    asChild = false,
    variant = "default",
    size = "md",
    isLoading = false,
    icon,
    iconPosition = "left",
    bgColor,
    fullWidth = false,
    className,
    disabled,
    children,
    style,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button";
    const baseStyles = mergeClassNames(
        "inline-flex items-center justify-center",
        "font-medium rounded-md",
        "transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    );

    const variants: Record<Variant, string> = {
        default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "bg-transparent text-gray-500",
        social: "",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes: Record<Size, string> = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-5 py-2.5 text-base",
        icon: "p-2 rounded-full",
    };

    const mergedStyle = {
        ...(style ?? {}),
        ...(bgColor ? { backgroundColor: bgColor } : {}),
    };
  
    const variantClass = variants[variant];

    return (
        <Comp
            disabled={isLoading || disabled}
            className={mergeClassNames(baseStyles, variantClass, sizes[size], fullWidth ? "w-full" : undefined, className)}
            style={mergedStyle}
            {...props}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
                {icon && iconPosition === "left" && (<span className="mr-2 flex items-center">{icon}</span>)}
                {children}
                {icon && iconPosition === "right" && (<span className="ml-2 flex items-center">{icon}</span>)}
            </>
          )}
        </Comp>
      );
}

export function SocialButton({
    asChild = false,
    size = "md",
    isLoading = false,
    icon,
    bgClass,
    bgColor,
    fullWidth = false,
    className,
    disabled,
    children,
    ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const isNeutral = !bgClass && !bgColor;

  const baseSocial = isNeutral
    ? "relative flex items-center justify-center border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
    : "flex items-center justify-center gap-2 font-medium text-white rounded-md transition-colors hover:opacity-90 cursor-pointer";
  const sizes: Record<Size, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-2.5 text-base",
    icon: "p-2 rounded-full",
  };

  return (
    <Comp
        disabled={isLoading || disabled}
        className={mergeClassNames(baseSocial, sizes[size], fullWidth && "w-full", bgClass, className)}
        style={bgColor ? { backgroundColor: bgColor } : undefined}
        {...props}>
        {isLoading ? (
        <span>Loading...</span>
        ) : isNeutral ? (
        <>
            <span className="absolute left-4 flex items-center">{icon}</span>
            <span className="mx-auto">{children}</span>
        </>
        ) : (
        <>
            {icon && <span className="flex items-center">{icon}</span>}
            {children}
        </>
        )}
    </Comp>
  );
}

function mergeClassNames(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}