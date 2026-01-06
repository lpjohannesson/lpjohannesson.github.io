import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { motion } from 'framer-motion';
import type { ReactNode } from "react";

function NavButton(props: { page: string, children: ReactNode }) {
    return (
        <RouterLink to={props.page} style={{ width: "100%" }}>
            <Button variant="outlined" sx={{
                color: "white",
                borderColor: "#666666",
                textTransform: "lowercase",
                width: "100%"
            }}>
                {props.children}
            </Button>
        </RouterLink>
    )
}

function PageContainer(props: { children: ReactNode }) {
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
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "8px"
                        }}>
                            <NavButton page="/">Home</NavButton>
                            <NavButton page="/projects">Projects</NavButton>
                            <NavButton page="/contact">Contact / Links</NavButton>
                        </Box>
                    </Box>
                    <Box sx={{
                        padding: "8px 12px",
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        <Box sx={{ flex: "1" }}>
                            <motion.div style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }}
                                initial={{ opacity: 0, transform: "translate(0, 16px)" }}
                                animate={{ opacity: 1, transform: "none" }}
                                transition={{ duration: 0.5 }}>
                                {props.children}
                            </motion.div>
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