import React from 'react';
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from './colorVariantBy';
import { useTheme } from '@src/theme/ThemeProvider';
import { ButtonSize, buttonSize } from './buttonSize';

interface ButtonProps extends ButtonBaseProps {
    fullWidth?: boolean;
    children: React.ReactNode,
    colorVariant?: ColorVariant;
    variant?: Variant;
    size?: ButtonSize;
}

export default function Button({ fullWidth, styleSheet, children, colorVariant, variant, size }: ButtonProps) {
    const theme = useTheme();
    return (
        <ButtonBase
         styleSheet={{
            alignSelf: 'start',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            ...colorVariantBy(theme, colorVariant, variant),
            ...buttonSize[size],
            ...(fullWidth && {
                alignSelf: 'initial',
            }),
            ...styleSheet
         }}>
            {children}
        </ButtonBase>
    )
}

Button.defaultProps = {
    fullWidth: false,
    size: 'md',
    variant: 'contained',
    colorVariant: 'primary'
}

Button.Base = ButtonBase;