import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { Outlet } from "react-router";
import FadeContainer from "./FadeContainer";
import NavBar from "./NavBar";
import { Palette } from "./Palette";

function ProjectsPage() {
    const [resetKey, setResetKey] = useState(0);
    const scrollRef = useRef<any>(null);

    const reset = () => {
        setResetKey(prevKey => prevKey + 1);
        scrollRef.current.scrollTop = 0;
    };

    return (
        <>
            <Box sx={{
                margin: "0 64px",
                marginBottom: "8px"
            }}>
                <NavBar links={[
                    { name: "Games", url: "/projects/games" },
                    { name: "Toys", url: "/projects/toys" },
                    { name: "3D Art", url: "/projects/3d-art" },
                ]} reset={reset} palette={Palette.subNavbar} />
            </Box>
            
            <FadeContainer key={resetKey}>
                <Box ref={scrollRef} sx={{
                    height: "570px",
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                }}>
                    <Outlet />
                </Box>   
            </FadeContainer>
        </>
    )
}

export default ProjectsPage;