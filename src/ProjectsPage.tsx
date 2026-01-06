import { Box, Button, Link, Typography } from "@mui/material";
import PageContainer from "./PageContainer";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Video, VideoContext } from "./VideoContext";
import { useContext, type ReactNode } from "react";

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

function ProjectsPage() {
    const containerStyle = {
        display: "flex",
        gap: "8px"
    };

    return (
        <PageContainer>
            <Typography variant="h6"><b>Games</b></Typography>
            <Box sx={{
                maxHeight: "590px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
            }}>
                <Box sx={containerStyle}>
                    <ProjectDisplay
                        title="Eyeballin' It"
                        bg="projects/eyeballin-it.png"
                        gitHubLink="https://github.com/lpjohannesson/eyeballin-it"
                        youTubeId="qyFzbteV2KQ"
                        portrait={true}>
                        Fully-featured puzzle game for Android using Godot Engine, including Google Ads integration.
                        <br /><br />
                        <Link href="https://lpjohannesson.github.io/eyeballin-it/">Play it online!</Link>
                    </ProjectDisplay>
                    <ProjectDisplay
                        title="AimPlat"
                        bg="projects/aim-plat.png"
                        gitHubLink="https://github.com/lpjohannesson/AimPlat"
                        youTubeId="kTeiTHk6080"
                        portrait={false}>
                        3D character controller test with custom-made assets using Unity and Blender.
                    </ProjectDisplay>
                </Box>
                <Box sx={containerStyle}>
                    <ProjectDisplay
                        title="Bitfielder"
                        bg="projects/bitfielder.png"
                        gitHubLink="https://github.com/lpjohannesson/bitfielder_godot"
                        youTubeId="I_FGMD7gTSw"
                        portrait={false}>
                        2D sandbox game with networked multiplayer using Godot Engine.
                    </ProjectDisplay>
                    <ProjectDisplay
                        title="Robot Game"
                        bg="projects/robot-game.png"
                        gitHubLink="https://github.com/lpjohannesson/robot-game"
                        youTubeId="0IRnIBfflTQ"
                        portrait={false}>
                        2D top-down shooter game created as a school project in MonoGame.
                    </ProjectDisplay>
                </Box>
            </Box>
        </PageContainer>
    )
}

export default ProjectsPage;