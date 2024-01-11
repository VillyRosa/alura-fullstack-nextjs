import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "styled-components";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {
    const theme = useTheme()

    return (
        <BaseComponent
         tag="main"
         styleSheet={{
            backgroundColor: theme.colors.neutral.x000,
            color: '#333',
            flex: 1,
            alignItems: 'center'
         }}
        >
            <Background />
            <Menu />
            <Feed>
                <Feed.Header />
            </Feed>
            <Footer />
            {/* 
            <Feed>
                <Feed.Header />
                <Text tag="h1" variant='display1'>
                    Últimas Atualizações
                </Text>
                <Feed.Posts />
            </Feed>
            */}
        </BaseComponent>
    )
}