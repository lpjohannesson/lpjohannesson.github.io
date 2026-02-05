import { Box, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router";
import { NavBarPalette } from "./Palette";

function NavBar(props: { links: { name: string, url: string }[], reset: () => void, palette: NavBarPalette, textStyle?: any, vertical?: boolean }) {
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
            flexDirection: `${props.vertical ? "column" : "row"}`,
            overflow: "hidden",
            borderRadius: "16px",
            border: `4px solid ${props.palette.back}`,
            backgroundColor: `${props.palette.back}`
        }}>
            {props.links.map(link => (
                <RouterLink to={`${link.url}`} style={{ width: "100%" }}>
                    <Button onClick={props.reset} sx={Object.assign({}, {
                        textTransform: "none",
                        width: "100%",
                        color: link == selectedLink ? `${props.palette.selectedText}` : "white" ,
                        height: "32px",
                        backgroundColor: link == selectedLink ? `${props.palette.front}` : "none" 
                    }, props.textStyle)}>
                        {link.name}
                    </Button>
                </RouterLink>
            ))}
        </Box>
    )
}

export default NavBar;