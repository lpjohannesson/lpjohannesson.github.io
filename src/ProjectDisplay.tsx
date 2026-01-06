import { Box, Button, Link, Typography } from "@mui/material";
import { useContext, type ReactNode } from "react";
import { Video, VideoContext } from "./VideoContext";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectDisplay(props: {
    children: ReactNode,
    bg: string,
    title: string,
    gitHubLink: string,
    youTubeId: string,
    portrait: boolean }) {
    
    const { setVideo } = useContext(VideoContext);

    return (<>
        <Box sx={{
            border: "4px solid #333333",
            borderRadius: "16px",
            overflow: "hidden",
            flex: "1"
        }}>
            <Box sx={{
                backgroundImage: `url(${props.bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "220px"
            }}>

            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "220px"
            }}>
                <Box sx={{
                    padding: "8px 10px"
                }}>
                    <Typography variant="h6"><b>{props.title}</b></Typography>
                    <Typography variant="subtitle2">{props.children}</Typography>
                </Box>

                <Box>
                    <Button variant="contained" onClick={() => { setVideo(new Video(props.youTubeId, props.portrait)); }} sx={{
                        width: "100%",
                        borderRadius: "0",
                        backgroundColor: "red"
                    }}>
                        <PlayArrowIcon style={{ marginRight: "8px" }} />Play demo video
                    </Button>
                    <Link href={props.gitHubLink}>
                        <Button variant="contained" sx={{
                            width: "100%",
                            borderRadius: "0"
                        }}>
                            <GitHubIcon style={{ marginRight: "8px" }} />View on GitHub
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    </>)
}

export default ProjectDisplay;