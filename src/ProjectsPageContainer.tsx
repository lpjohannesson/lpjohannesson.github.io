import { Box, Button } from "@mui/material";
import { useRef, useState, type ReactNode } from "react";
import { Outlet, Link as RouterLink } from "react-router";
import FadeContainer from "./FadeContainer";

function NavButton(props: { page: string, children: ReactNode, reset: () => void }) {
    return (
        <RouterLink to={`/projects/${props.page}`} style={{ width: "100%" }}>
            <Button onClick={props.reset} variant="outlined" sx={{
                color: "white",
                borderColor: "#666666",
                textTransform: "none",
                width: "100%",
                borderRadius: "16px"
            }}>
                {props.children}
            </Button>
        </RouterLink>
    )
}

function ProjectsPageContainer() {
    const [resetKey, setResetKey] = useState(0);
    const scrollRef = useRef<any>(null);

    const reset = () => {
        setResetKey(prevKey => prevKey + 1);
        scrollRef.current.scrollTop = 0;
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "8px",
                padding: "0 64px"
            }}>
                <NavButton reset={reset} page="/">Games</NavButton>
                <NavButton reset={reset} page="/toys">Toys</NavButton>
                <NavButton reset={reset} page="/3d-art">3D Art</NavButton>
            </Box>
            <Box ref={scrollRef} sx={{
                maxHeight: "580px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
            }}>
                <FadeContainer key={resetKey}>
                    <Outlet />
                </FadeContainer>
            </Box>
        </>
    )
}

export default ProjectsPageContainer;