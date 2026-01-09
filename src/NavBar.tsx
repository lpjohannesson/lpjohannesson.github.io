import { Box, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router";

function NavBar(props: { links: { name: string, url: string }[], reset: () => void }) {
    const location = useLocation();

    let selectedLink = props.links[0];

    for (const link of props.links.slice(1)) {
        if (!location.pathname.startsWith(link.url)) {
            continue;
        }

        selectedLink = link;
        break;
    }

    return (
        <Box sx={{
            display: "flex",
            overflow: "hidden",
            borderRadius: "16px",
            border: "4px solid #444444",
            backgroundColor: "#444444"
        }}>
            {props.links.map(link => (
                <RouterLink to={`${link.url}`} style={{ width: "100%" }}>
                    <Button onClick={props.reset} sx={{
                        textTransform: "none",
                        width: "100%",
                        color: "white",
                        height: "32px",
                        backgroundColor: link == selectedLink ? "#666666" : "none" 
                    }}>
                        {link.name}
                    </Button>
                </RouterLink>
            ))}
        </Box>
    )
}

export default NavBar;