import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';

interface BoxProps {
    // Vamos resolver esse any dps
    tag?: 'main' | 'div' | 'section' | 'ul' | 'header' | 'footer' | 'nav' | 'article' | string;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
    const Tag = tag || 'div';
    return (
        <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
            {children}
        </BaseComponent>
    )
}