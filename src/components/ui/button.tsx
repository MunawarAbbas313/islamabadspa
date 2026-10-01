import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export const buttonVariants = ({ variant = "primary", size = "md", className }: ButtonStyleProps) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
        secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-muted",
        outline: "border border-border bg-white/60 text-foreground hover:border-primary hover:text-primary",
        ghost: "text-stone-700 hover:bg-stone-100 dark:text-stone-200",
        link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
    };

    return cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
    );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<ButtonStyleProps, 'className'> {
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={buttonVariants({ variant, size, className })}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
