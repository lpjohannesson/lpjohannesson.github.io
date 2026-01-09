import { Box } from "@mui/material"
import { Navigate, Route, HashRouter as Router, Routes } from "react-router"
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ProjectsGamesPage from "./ProjectsGamesPage";
import ContactPage from "./ContactPage";
import { Video, VideoContext } from "./VideoContext";
import Projects3DArtPage from "./Projects3DArtPage";
import PageContainer from "./PageContainer";
import ProjectsPage from "./ProjectsPage";
import ProjectsToysPage from "./ProjectsToysPage";
import ResumeDisplay from "./ResumeDisplay";

function App() {
  useEffect(() => {
    document.title = 'Leif Johannesson Portfolio';
  }, []);

  const [video, setVideo] = useState<Video | null>(null);

  return (<>
      <VideoContext.Provider value={{video, setVideo}}>
      <Router>
        <Routes>
          <Route path="/" element={<PageContainer />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomePage />}>
              <Route index element={<Navigate to="game-developer" replace />} />
              <Route path="game-developer" element={<ResumeDisplay
                link="https://docs.google.com/document/d/1b7fyzjKTQDf8BxVTfLfe3PsiZpzmbFxaw8mh8-mD0a0/edit?usp=sharing"
                embed="https://docs.google.com/document/d/e/2PACX-1vTx0N6cvy1lOOMguRil8tBbr10hs6PczRB6mxIUjpNxgmXiGQG5Nb3IlfHNE9gnz3QO1UHeKBp_JtHo/pub?embedded=true"
              />} />
              <Route path="software-developer" element={<ResumeDisplay
                link="https://docs.google.com/document/d/1lwQBg_FuuACZvSnHIJ3o34GddLe9ElhGt7qHqYBQVyU/edit?usp=sharing"
                embed="https://docs.google.com/document/d/e/2PACX-1vRambdM9vglKdwpvNl2tgXALH8ikaGPPuB8nc6ecGKnu_721nM8vFL-8BVDFwsLapRfwDgozmg8atUw/pub?embedded=true"
              />} />
            </Route>
            <Route path="projects" element={<ProjectsPage />}>
              <Route index element={<Navigate to="games" replace />} /> 
              <Route path="games" element={<ProjectsGamesPage />} />
              <Route path="toys" element={<ProjectsToysPage />} />
              <Route path="3d-art" element={<Projects3DArtPage />} />
            </Route>
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
      {video == null ? null : <Box onClick={() => { setVideo(null); }} sx={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "1",
        backdropFilter: "blur(8px)"
      }}>
        <iframe style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none"
        }}
          width={video.portrait ? "480" : "854"}
          height={video.portrait ? "854" : "480"}
          allow="fullscreen"
          src={`https://www.youtube.com/embed/${video.youTubeId}?autoplay=1`}>
        </iframe>
      </Box>}
      </VideoContext.Provider>
      
    </>
  )
}

export default App
