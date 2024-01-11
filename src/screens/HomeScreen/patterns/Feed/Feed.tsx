import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';
import Button from '@src/components/Button/Button';
import { useTheme } from '@src/theme/ThemeProvider';

interface FeedProps {
    children?: React.ReactNode
}
export default function Feed({ children }: FeedProps) {
    const theme = useTheme();
    
    return (
        <Box
         styleSheet={{
            width: '100%',
            maxWidth: '683px',
            backgroundColor: theme.colors.neutral.x000,
            borderRadius: '8px',
            marginTop: '-228px',
            paddingVertical: '40px',
            paddingHorizontal: '32px'
         }}
        >
            {children}
        </Box>
    )
}

Feed.Header = () => {
    const theme = useTheme();

    return (
        <Box
         styleSheet={{
            borderBottom: `1px solid ${theme.colors.neutral.x200}`,
            marginBottom: '24px',
            paddingBottom: '24px'
         }}
        >
            <Box
             styleSheet={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '16px',
                marginBottom: '16px'
             }}
            >
                <Image 
                    src="https://github.com/villyrosa.png" 
                    alt="Imagem de perfil do VillyRosa" 
                    styleSheet={{
                        width: { xs: '100px', md: '128px' },
                        height: { xs: '100px', md: '128px' },
                        borderRadius: '50%'
                    }}
                />

                <Box
                 styleSheet={{
                    justifyContent: 'space-between'
                 }}
                >
                    <Box styleSheet={{ display: {xs: 'none', md: 'flex'}, justifyContent: 'space-between', flex: '1'}}>
                        <Button fullWidth colorVariant='primary' size='xl' href='/'>Newsletter</Button>
                        <Button fullWidth colorVariant='neutral' size='xl' href='/'>Buy me a coffee</Button>
                    </Box>
                    <Box styleSheet={{ display: {xs: 'flex', md: 'none'}, justifyContent: 'space-between', flex: '1'}}>
                        <Button fullWidth colorVariant='primary' size='xs' href='/'>Newsletter</Button>
                        <Button fullWidth colorVariant='neutral' size='xs' href='/'>Buy me a coffee</Button>
                    </Box>
                </Box>
            </Box>
            <Text tag='h1' variant='heading4'>
                Villy Rosa
            </Text>
            
            {/* <Link colorVariant="negative" href="https://youtube.com">
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
            </Link> */}
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