import { Box, Typography, Link, Button } from "@mui/material"
import { Route, BrowserRouter, Routes, Link as RouterLink } from "react-router"
import { motion } from 'framer-motion';
import SvgIcon from '@mui/material/SvgIcon';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const DiscordIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </SvgIcon>
);

function NavButton(props: any) {
  return (
    <RouterLink to={props.page} style={{ width: "100%" }}>
      <Button variant="outlined" sx={{
        color: "white",
        borderColor: "#666666",
        textTransform: "lowercase",
        width: "100%"
      }}>
        {props.children}  
      </Button>
    </RouterLink>
  )
}

function PageContainer(props: any) {
  return (
    <Box sx={{
      backgroundColor: "#222222",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <Box sx={{
        padding: "16px",
        height: "100%",
        width: "800px",
        alignSelf: "center"
      }}>
        <Box sx={{
          borderRadius: "16px",
          border: "4px solid #333333",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
          <Box sx={{
            backgroundColor: "#333333",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Box>
                <Typography variant="h4"><b>Leif Johannesson</b></Typography>
                <Typography variant="h6">Software/Game Developer</Typography>
              </Box>
              <img src="profile.png" height="64px" style={{ borderRadius: "50%" }} />
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "8px"
            }}>
              <NavButton page="/">Home</NavButton>
              <NavButton page="/projects">Projects</NavButton>
              <NavButton page="/contact">Contact / links</NavButton>
            </Box>
          </Box>
          <Box sx={{
              padding: "8px 12px",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
            <Box sx={{ flex: "1" }}>
              <motion.div style={{ height: "100%" }}
                initial={{ opacity: 0, marginTop: "16px" }}
                animate={{ opacity: 1, marginTop: "0" }}
                transition={{ duration: 0.5 }}>
                {props.children}
              </motion.div>
            </Box>
            <Typography variant="subtitle2" align="center">Copyright &copy; 2025 Leif Johannesson. Website custom-built using React.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function HomePage() {
  return (
    <PageContainer>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}>
          <Typography variant="subtitle1">Hello! I'm a software and game developer from Canada.</Typography>
          <Typography variant="subtitle1">Here is my resume <Link href="https://docs.google.com/document/d/1lwQBg_FuuACZvSnHIJ3o34GddLe9ElhGt7qHqYBQVyU/edit?usp=sharing">(link)</Link>:</Typography>
          <iframe style={{ flex: "1", border: "none" }} width="100%" src="https://docs.google.com/document/d/e/2PACX-1vRambdM9vglKdwpvNl2tgXALH8ikaGPPuB8nc6ecGKnu_721nM8vFL-8BVDFwsLapRfwDgozmg8atUw/pub?embedded=true"></iframe>
        </Box>
    </PageContainer>
  )
}

function ProjectDisplay(props: any) {
  return (
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
        height: "200px"
      }}>

      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "200px"
      }}>
        <Box sx={{
          padding: "8px 10px"
        }}>
          <Typography variant="h6"><b>{props.title}</b></Typography>
          <Typography variant="subtitle2">{props.children}</Typography>
        </Box>

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
  )
}

function ProjectsPage() {
  return (
    <PageContainer>
      <Typography variant="h6"><b>Games</b></Typography>
      <Box sx={{
        display: "flex"
      }}>
        <ProjectDisplay
          title="Eyeballin' It"
          bg="projects/eyeballin-it.png"
          gitHubLink="https://github.com/lpjohannesson/eyeballin-it">
          Fully-featured puzzle game for Android using Godot Engine, including Google Ads integration.
          <br /><br />
          <Link href="https://lpjohannesson.github.io/eyeballin-it/">Play it online!</Link>
        </ProjectDisplay>
        <ProjectDisplay
          title="AimPlat"
          bg="projects/aim-plat.png"
          gitHubLink="https://github.com/lpjohannesson/AimPlat">
          3D character controller prototype with a custom model using Unity and Blender.
        </ProjectDisplay>
        <ProjectDisplay
          title="Robot Game"
          bg="projects/robot-game.png"
          gitHubLink="https://github.com/lpjohannesson/robot-game">
          2D top-down shooter game created as a school project in MonoGame.
        </ProjectDisplay>
      </Box>
    </PageContainer>
  )
}

function ContactLink(props: any) {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
      {props.icon}
      <Typography variant="subtitle1">{props.children}</Typography>
    </Box>
  )
}

function ContactPage() {
  return (
    <PageContainer>
      <Typography>My email and Discord are the best ways to reach me. Thank you!</Typography>
      <br />
      <ContactLink icon={<EmailIcon />}><b>Email:</b> lp.johannesson@gmail.com</ContactLink>
      <ContactLink icon={<DiscordIcon />}><b>Discord:</b> lpjohannesson</ContactLink>
      <ContactLink icon={<GitHubIcon />}><b>GitHub:</b> <Link href="https://github.com/lpjohannesson">Link</Link></ContactLink>
      <ContactLink icon={<LinkedInIcon />}><b>LinkedIn:</b> <Link href="https://www.linkedin.com/in/lpjohannesson/">Link</Link></ContactLink>
      <ContactLink icon={<img src="fiverr.svg" width="24px" draggable="false" />}><b>Fiverr:</b> <Link href="https://www.fiverr.com/crossfrogmedia">Link</Link></ContactLink>
    </PageContainer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
