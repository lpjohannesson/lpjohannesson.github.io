import { Box } from "@mui/material";
import ProjectDisplay from "./ProjectDisplay";

function ProjectsToysPage() {
    const containerStyle = {
        display: "flex",
        gap: "8px"
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={containerStyle}>
                <ProjectDisplay
                    title="Swing3D"
                    bg="projects/swing3d.png"
                    gitHubLink="https://github.com/lpjohannesson/Swing3D"
                    youTubeId="4vzkIqIBw2Y"
                    portrait={false}>
                    3D city swinging simulator in Godot Engine.
                </ProjectDisplay>
                <ProjectDisplay
                    title="TreeGen"
                    bg="projects/tree-gen.png"
                    gitHubLink="https://github.com/lpjohannesson/TreeGen"
                    youTubeId="Go4EKrShXnY"
                    portrait={false}>
                    3D randomized tree generator in C++ and OpenGL.
                </ProjectDisplay>
            </Box>
            <Box sx={containerStyle}>
                <ProjectDisplay
                    title="Voxular"
                    bg="projects/voxular.png"
                    gitHubLink="https://github.com/lpjohannesson/Voxular"
                    youTubeId="_aCpcNuDX_o"
                    portrait={false}>
                    3D voxel-based sand simulator in C++ and OpenGL.
                </ProjectDisplay>
                <ProjectDisplay
                    title="WiiTris"
                    bg="projects/wiitris.png"
                    gitHubLink="https://github.com/lpjohannesson/wiitris"
                    youTubeId="wY2lF1a7n6Q"
                    portrait={false}>
                    A version of Tetris written from scratch as Wii homebrew!
                </ProjectDisplay>
            </Box>
        </Box>);
}

export default ProjectsToysPage;