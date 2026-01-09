import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import FadeContainer from "./FadeContainer";
import NavBar from "./NavBar";

function HomePage() {
    const [resetKey, setResetKey] = useState(0);

    const reset = () => {
        setResetKey(prevKey => prevKey + 1);
    };

    return (
        <>
            <Typography variant="subtitle1">Hello! I'm a software and game developer from Canada.</Typography>
            <Typography sx={{ marginBottom: "8px" }} variant="subtitle1">Here are my resumes:</Typography>
            
            <Box sx={{ 
                margin: "0 64px",
                marginBottom: "8px"
            }}>
                <NavBar links={[
                    { name: "Game Developer", url: "/home/game-developer" },
                    { name: "Software Developer", url: "/home/software-developer" },
                ]} reset={reset} />
            </Box>

            <FadeContainer key={resetKey}>
                <Outlet />
            </FadeContainer>
            
        </>
    )
}

export default HomePage;