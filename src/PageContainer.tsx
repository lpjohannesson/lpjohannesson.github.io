import { Box, Typography } from "@mui/material";
import { Outlet  } from "react-router";
import { useState } from "react";
import FadeContainer from "./FadeContainer";
import NavBar from "./NavBar";

function PageContainer() {
    const [resetKey, setResetKey] = useState(0);

    const reset = () => {
        setResetKey(prevKey => prevKey + 1);
    };

    return (
        <Box sx={{
            color: "white",
            height: "880px",
            display: "flex",
            flexDirection: "column"
        }}>
            <Box sx={{
                padding: "16px",
                height: "100%",
                width: "800px",
                alignSelf: "center"
            }}>
                <Box sx={{
                    borderRadius: "16px",
                    border: "4px solid #333333",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Box sx={{
                        backgroundColor: "#333333",
                        padding: "12px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px"
                        }}>
                            <img src="profile.jpg" height="96px" style={{ borderRadius: "50%" }} />
                            <Box>
                                <Typography variant="h4"><b>Leif Johannesson</b></Typography>
                                <Typography variant="h6">Software/Game Developer</Typography>
                            </Box>
                        </Box>
                        <NavBar links={[
                            { name: "Home", url: "/home" },
                            { name: "Projects", url: "/projects" },
                            { name: "Contact / Links", url: "/contact" },
                        ]} reset={reset}></NavBar>
                    </Box>
                    <Box sx={{
                        padding: "8px 12px",
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        <Box sx={{ flex: "1" }}>
                            <FadeContainer key={resetKey}>
                                <Outlet />
                            </FadeContainer>
                        </Box>
                        <Typography variant="subtitle2" align="center">
                            Copyright &copy; 2025 Leif Johannesson. Website custom-built using React.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PageContainer;