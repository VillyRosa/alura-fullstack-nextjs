import { BaseComponent } from "@src/theme/BaseComponent";
import * as icons from './svgs/_index';
import { StyleSheet } from "@src/theme/StyleSheet";

const iconSizes = {
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '36px'
} as const;

interface IconProps {
    name: keyof typeof icons;
    styleSheet?: StyleSheet,
    size?: keyof typeof iconSizes
}

export default function Icon({ size, name, ...props }: IconProps) {
    const CurrentIcon = icons[name];
    if (!CurrentIcon) return (
        <>
            <Icon />
            "{name}" is not a valid icon!
        </>
    );

    return (
        <BaseComponent
         as="svg"
         styleSheet={{
            width: iconSizes[size],
            height: iconSizes[size],
         }}
         color="inherit"
         viewBox="0 0 24 24"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
        >
            <CurrentIcon />
        </BaseComponent>
    )
}

Icon.defaultProps = {
    name: 'default_icon',
    size: 'md'
}