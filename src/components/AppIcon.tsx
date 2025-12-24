import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'size'> {
    // Logic: This allows any string but suggests Lucide icon names
    name: string; 
    size?: number;
    color?: string;
    className?: string;
    strokeWidth?: number;
}

function Icon({
    name,
    size = 24,
    color = "currentColor",
    className = "",
    strokeWidth = 2,
    ...props
}: IconProps) {
    // Logic: Converts 'map-pin' to 'MapPin' to match Lucide's export names
    const formattedName = typeof name === 'string' 
        ? name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
        : name;

    // Fix: We cast the whole library to 'Record<string, any>' to satisfy ESLint 
    // without using 'any' directly on the variable.
    const Icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
    const IconComponent = Icons[formattedName];

    if (!IconComponent) {
        return (
            <HelpCircle
                size={size}
                color="gray"
                strokeWidth={strokeWidth}
                className={className}
                {...props}
            />
        );
    }

    return (
        <IconComponent
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            className={className}
            {...props}
        />
    );
}

export default Icon;