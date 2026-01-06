import { Link, Typography } from "@mui/material";
import PageContainer from "./PageContainer";

function HomePage() {
    return (
        <PageContainer>
            <Typography variant="subtitle1">Hello! I'm a software and game developer from Canada.</Typography>
            <Typography variant="subtitle1">Here is my resume <Link href="https://docs.google.com/document/d/1lwQBg_FuuACZvSnHIJ3o34GddLe9ElhGt7qHqYBQVyU/edit?usp=sharing">(link)</Link>:</Typography>
            <iframe style={{ flex: "1", border: "none" }} width="100%" src="https://docs.google.com/document/d/e/2PACX-1vRambdM9vglKdwpvNl2tgXALH8ikaGPPuB8nc6ecGKnu_721nM8vFL-8BVDFwsLapRfwDgozmg8atUw/pub?embedded=true"></iframe>
        </PageContainer>
    )
}

export default HomePage;