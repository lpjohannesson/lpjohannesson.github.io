import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import FadeContainer from "./FadeContainer";
import NavBar from "./NavBar";
import { Palette } from "./Palette";

function ResumesPage() {
	const [resetKey, setResetKey] = useState(0);

	const reset = () => {
		setResetKey(prevKey => prevKey + 1);
	};

	return (
		<>
			<Box sx={{ 
				margin: "0 64px",
				marginBottom: "8px"
			}}>
				<NavBar links={[
					{ name: "Game Developer", url: "/resumes/game-developer" },
					{ name: "Graphics Programmer", url: "/resumes/graphics-programmer" },
					{ name: "Software Developer", url: "/resumes/software-developer" },
				]} reset={reset} palette={Palette.subNavbar} />
			</Box>

			<FadeContainer key={resetKey}>
				<Outlet />
			</FadeContainer>
		</>
	)
}

export default ResumesPage;