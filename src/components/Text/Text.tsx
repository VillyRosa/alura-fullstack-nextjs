import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';
import Box from "../Box/Box";
import { ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from 'styled-components';
import { BaseComponent } from '@src/theme/BaseComponent';

interface TextProps {
    variant?: ThemeTypographyVariants,
    tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'a',
    children?: React.ReactNode,
    styleSheet?: StyleSheet,
    ref?: any
}

export default function Text({styleSheet, tag, variant, ...props }: TextProps) {

    const theme = useTheme();
    const textVariant = theme.typograph.variants[variant];

    return (
        <Box 
         tag={tag}
         styleSheet={
            {
                fontFamily: theme.typograph.fontFamily,
                ...textVariant,
                ...styleSheet
            }
        } 
         {...props} 
        />
    )
}

Text.defaultProps = {
    tag: 'p',
    variant: 'body2'
};