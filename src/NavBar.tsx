import { Box, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router";
import Palette from "./Palette";

function NavBar(props: { links: { name: string, url: string }[], reset: () => void, textStyle?: any }) {
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
            border: `4px solid ${Palette.navbarBack}`,
            backgroundColor: `${Palette.navbarBack}`
        }}>
            {props.links.map(link => (
                <RouterLink to={`${link.url}`} style={{ width: "100%" }}>
                    <Button onClick={props.reset} sx={Object.assign({}, {
                        textTransform: "none",
                        width: "100%",
                        color: link == selectedLink ? `${Palette.navbarBack}` : "white" ,
                        height: "32px",
                        backgroundColor: link == selectedLink ? `${Palette.navbarFront}` : "none" 
                    }, props.textStyle)}>
                        {link.name}
                    </Button>
                </RouterLink>
            ))}
        </Box>
    )
}

export default NavBar;