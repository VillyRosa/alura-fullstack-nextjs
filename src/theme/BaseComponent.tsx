import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from '@displaykit/responsive_styles';

interface StyledBaseComponent {
    stylesheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    ${({ stylesheet }) => parseStyleSheet(stylesheet)}
`;

export const BaseComponent = ({ styleSheet, ...otherProps }) => {
    return (
        <StyledBaseComponent stylesheet={styleSheet} {...otherProps} />
    )
}

BaseComponent.defaultProps = {
    styleSheet: {},
}