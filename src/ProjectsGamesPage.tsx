import { Box, Link } from "@mui/material";
import ProjectDisplay from "./ProjectDisplay";

function ProjectsGamesPage() {
    const containerStyle = {
        display: "flex",
        gap: "8px"
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                    3D character controller with custom-made assets using Unity and Blender.
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
                    2D top-down shooter game created as a school project in MonoGame with C#.
                </ProjectDisplay>
            </Box>
        </Box>);
}

export default ProjectsGamesPage;