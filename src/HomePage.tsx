import { Box, Typography } from "@mui/material";
import { Palette } from "./Palette";
import NavBar from "./NavBar";
import { useState } from "react";
import { Outlet } from "react-router";
import FadeContainer from "./FadeContainer";

function TechIcon(props: { title: string, imageUrl: string }) {
    return (
    <Box width="75px" sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4px" }}>
        <Box height="40px" sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img src={props.imageUrl} width="40px" height="auto"></img>
        </Box>
        
        <Typography variant="subtitle2" sx={{ whiteSpace: "nowrap", marginTop: "4px" }}>{props.title}</Typography>
    </Box>);
}

function TechLanguagesPage() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <TechIcon title="C/C++" imageUrl="techs/cpp.png"></TechIcon>
                <TechIcon title="C#" imageUrl="techs/csharp.png"></TechIcon>
                <TechIcon title="JavaScript" imageUrl="techs/javascript.png"></TechIcon>
                <TechIcon title="TypeScript" imageUrl="techs/typescript.png"></TechIcon>
                <TechIcon title="Python" imageUrl="techs/python.png"></TechIcon>
                <TechIcon title="Java" imageUrl="techs/java.png"></TechIcon>
            </Box>
        </>
    )
}

function TechCppPage() {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
                    <TechIcon title="CMake" imageUrl="techs/cmake.png"></TechIcon>
                    <TechIcon title="GCC" imageUrl="techs/gcc.png"></TechIcon>
                    <TechIcon title="MSVC" imageUrl="techs/visual_studio.png"></TechIcon>
                    <TechIcon title="MSYS2" imageUrl="techs/msys2.png"></TechIcon>
                    <TechIcon title="vcpkg" imageUrl="techs/vcpkg.png"></TechIcon>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <TechIcon title="SDL" imageUrl="techs/sdl.png"></TechIcon>
                    <TechIcon title="OpenGL" imageUrl="techs/opengl.png"></TechIcon>
                    <TechIcon title="Dear ImGui" imageUrl="techs/dear_imgui.png"></TechIcon>
                </Box>
            </Box>
            
        </>
    )
}

function TechGameDevPage() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <TechIcon title="Godot" imageUrl="techs/godot.png"></TechIcon>
                <TechIcon title="Unity" imageUrl="techs/unity.png"></TechIcon>
                <TechIcon title="MonoGame" imageUrl="techs/monogame.png"></TechIcon>
            </Box>
        </>
    )
}

function TechWebDevPage() {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
                    <TechIcon title="HTML" imageUrl="techs/html.png"></TechIcon>
                    <TechIcon title="CSS" imageUrl="techs/css.png"></TechIcon>
                    <TechIcon title="React" imageUrl="techs/react.png"></TechIcon>
                    <TechIcon title="Angular" imageUrl="techs/angular.png"></TechIcon>
                    <TechIcon title="Material UI" imageUrl="techs/material_ui.png"></TechIcon>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <TechIcon title="ASP.NET" imageUrl="techs/asp_net.png"></TechIcon>
                    <TechIcon title="Node.JS" imageUrl="techs/node_js.png"></TechIcon>
                    <TechIcon title="MySQL" imageUrl="techs/mysql.png"></TechIcon>
                    <TechIcon title="SQL Server" imageUrl="techs/mssql.png"></TechIcon>
                </Box>
            </Box>
            
        </>
    )
}

function TechCreativePage() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <TechIcon title="Blender" imageUrl="techs/blender.png"></TechIcon>
                <TechIcon title="Aseprite" imageUrl="techs/aseprite.png"></TechIcon>
                <TechIcon title="Paint.NET" imageUrl="techs/paintdotnet.png"></TechIcon>
                <TechIcon title="FL Studio" imageUrl="techs/fl_studio.png"></TechIcon>
            </Box>
        </>
    )
}

function TechMiscPage() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <TechIcon title="Git" imageUrl="techs/git.png"></TechIcon>
                <TechIcon title="Docker" imageUrl="techs/docker.png"></TechIcon>
                <TechIcon title="Jira" imageUrl="techs/jira.png"></TechIcon>
            </Box>
        </>
    )
}

function HomePage() {
    const [resetKey, setResetKey] = useState(0);

    const reset = () => {
        setResetKey(prevKey => prevKey + 1);
    };

    return (
        <>
            <Typography variant="subtitle1">Hello! I am a passionate young programmer and digital creative from Canada.</Typography>
            <Typography variant="subtitle1">
                <br />My dream is to create memorable and engaging digital experiences, and I have spent a lot of time and effort acquiring skills in programming and multimedia for this reason.
            </Typography>
            <Typography variant="subtitle1">
                <br />In the past, as examples, I have prototyped 2D and 3D indie game projects both solo and with friends, helped online clients with programming technicalities as a freelancer, and gotten into the weeds of lower-level custom game engine and graphics programming. I have also worked with various levels of the web stack during my education.
            </Typography>
            <Typography variant="subtitle1">
                <br />Here are some technologies I have worked with:
            </Typography>
            <Box sx={{ backgroundColor: `${Palette.border}`, padding: "8px 8px", borderRadius: "8px", display: "flex", gap: "12px" }}>
                <NavBar links={[
                    { name: "Programming Languages", url: "/home/programming-languages" },
                    { name: "C/C++ Technologies", url: "/home/c-cpp-technologies" },
                    { name: "Game Development", url: "/home/game-development" },
                    { name: "Web Development", url: "/home/web-development" },
                    { name: "Creative Tools", url: "/home/creative-tools" },
                    { name: "Miscellaneous Tools", url: "/home/miscellaneous-tools" },
                ]} reset={reset} palette={Palette.subNavbar} vertical={true}></NavBar>
                <Box sx={{ display: "flex" }}>
                    <FadeContainer key={resetKey}>
                        <Outlet />
                    </FadeContainer>
                    
                </Box>
            </Box>
            
        </>
    )
}

export { HomePage, TechLanguagesPage, TechCppPage, TechGameDevPage, TechWebDevPage, TechCreativePage, TechMiscPage };