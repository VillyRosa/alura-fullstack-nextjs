import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';

interface FeedProps {
    children?: React.ReactNode
}

export default function Feed({ children }: FeedProps) {
    return (
        <Box>
            <Text>
                Feed Base
            </Text>
            {children}
        </Box>
    )
}

Feed.Header = () => {
    return (
        <Box styleSheet={{color: '#f1f1f1'}}>
            <Image 
             src="https://github.com/villyrosa.png" 
             alt="Imagem de perfil do VillyRosa" 
             styleSheet={{
                width: '128px',
                height: '128px',
                borderRadius: '50%'
             }}
            />
            <Link colorVariant="accent" href="https://youtube.com">
                <Icon name="youtube" />
            </Link>
            <Link colorVariant="accent" href="https://youtube.com">
                <Icon name="twitter" />
            </Link>
            <Link colorVariant="accent" href="https://youtube.com">
                <Icon name="instagram" />
            </Link>
            <Link colorVariant="accent" href="https://youtube.com">
                <Icon name="github" />
            </Link>
            {/* <Icon name="dwada" /> */}
            <Text>
                Feed Header
            </Text>
        </Box>
    )
}

Feed.Posts = () => {
    return (
        <Box>
            <Text>
                Feed Post
            </Text>
        </Box>
    )
}