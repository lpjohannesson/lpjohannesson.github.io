import { createContext } from "react";

class Video {
  youTubeId: string;
  portrait: boolean;

  constructor(youTubeId: string, portrait: boolean) {
    this.youTubeId = youTubeId;
    this.portrait = portrait;
  }
}

const VideoContext = createContext<{
  video: Video | null,
  setVideo: ((video: Video | null) => void) }>
  ({ video: null, setVideo: () => {} });

export { Video, VideoContext };