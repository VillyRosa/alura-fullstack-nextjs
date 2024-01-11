import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
         tag="footer"
         styleSheet={{
            width: '100%',
            height: '120px',
            paddingHorizontal: '24px',
            paddingVertical: '24px',
            backgroundColor: theme.colors.neutral.x900,
            color: theme.colors.neutral.x000,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
         }}
        >
            <Text
             variant="body2"
            >
                Feito com ❤️ por Villy Rosa
            </Text>
        </Box>
    )
}