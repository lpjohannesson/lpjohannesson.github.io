import { Button, Link } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';

function ResumeDisplay(props: { link: string, embed: string }) {
    return (
        <>
            <iframe style={{ flex: "1", border: "none" }} width="100%" src={props.embed}></iframe>
            <Link href={props.link} sx={{
                alignSelf: "center"
            }}>
                <Button variant="contained" sx={{
                    width: "200px",
                    marginTop: "4px",
                    textTransform: "none",
                    display: "flex",
                    gap: "8px"
                }}>
                    <LinkIcon />
                    Open Resume
                </Button>
            </Link>
        </>
    );
}

export default ResumeDisplay;