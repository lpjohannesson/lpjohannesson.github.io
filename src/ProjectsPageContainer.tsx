import { Box, Button } from "@mui/material";
import { type ReactNode } from "react";
import { Outlet, Link as RouterLink } from "react-router";

function NavButton(props: { page: string, children: ReactNode }) {
    return (
        <RouterLink to={`/projects/${props.page}`} style={{ width: "100%" }}>
            <Button variant="outlined" sx={{
                color: "white",
                borderColor: "#666666",
                textTransform: "none",
                width: "100%"
            }}>
                {props.children}
            </Button>
        </RouterLink>
    )
}

function ProjectsPageContainer() {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "8px"
            }}>
                <NavButton page="/">Games</NavButton>
                <NavButton page="/3d-art">3D Art</NavButton>
            </Box>
            <Box sx={{
                maxHeight: "580px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
            }}>
                <Outlet />
            </Box>
        </>
    )
}

export default ProjectsPageContainer;