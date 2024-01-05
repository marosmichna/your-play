import { Container, Box } from "@mui/material";
import { LayoutSectionIdEnum } from "../../types";

export type SectionContainerProps = {
    children: React.ReactNode;
    sectionId: LayoutSectionIdEnum;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, sectionId }) => {
    return (
        <div id={sectionId} key={sectionId}>
            <Container maxWidth="xl">
                <Box minHeight="100vh">
                    {children}
                </Box>
            </Container>
        </div>
    )
}