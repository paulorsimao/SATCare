import { theme } from "antd";
import { ReactNode } from "react"
import { PageContainer } from "@ant-design/pro-components";

type Props = {
    children: ReactNode
}

export default function DefaultPageContainer({ children }: Props) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return (
        <PageContainer style={{ background: colorBgContainer, margin: '10px', borderRadius: '5px'}} >
            {children}
        </PageContainer>
    )
}