import { Box } from "@mui/material"
import { Route, HashRouter as Router, Routes } from "react-router"
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ProjectsGamesPage from "./ProjectsGamesPage";
import ContactPage from "./ContactPage";
import { Video, VideoContext } from "./VideoContext";
import Projects3DArtPage from "./Projects3DArtPage";
import PageContainer from "./PageContainer";
import ProjectsPageContainer from "./ProjectsPageContainer";

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
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPageContainer />}>
              <Route index element={<ProjectsGamesPage />} />
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
