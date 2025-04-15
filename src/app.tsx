import './app.css'
import {useEffect, useState} from "react";
import Amplitude from "amplitudejs";
import {Album, Song} from "./types/album.ts";
import Playlist from "./components/playlist.tsx";

function App() {
  const [album, setAlbum] = useState<Album | null>(null);
  const [showPlaylist, setShowPlaylist] = useState(false);

  useEffect(() => {
    fetch("/album.json").then(async (response) => {
      const album = await response.json();
      setAlbum(album);
      Amplitude.init({
        "songs": album.songs.map((song: Song) => ({
          "name": song.title,
          "artist": album.artist,
          "album": album.name,
          "url": song.url,
          "cover_art_url": album.thumbnail
        }))
      });
    })
  }, []);

  const openPlaylist = () => {
    setShowPlaylist(true);
  }

  const closePlaylist = () => {
    setShowPlaylist(false);
  }

  return (
    <div className="container">
      <div id="white-player">
        <div className="white-player-top">
          <div>
            &nbsp;
          </div>

          <div className="center">
            <span className="now-playing">Now Playing</span>
          </div>

          <div>
            &nbsp;
            {/*<img*/}
            {/*  src="/icons/show-playlist.svg"*/}
            {/*  className="show-playlist"*/}
            {/*  onClick={openPlaylist}*/}
            {/*/>*/}
          </div>
        </div>

        <div id="white-player-center">
          <img data-amplitude-song-info="cover_art_url" className="main-album-art"/>

          <div className="song-meta-data">
            <span data-amplitude-song-info="name" className="song-name"></span>
            <span data-amplitude-song-info="artist" className="song-artist"></span>
          </div>

          <div className="time-progress">
            <div id="progress-container">
              <input type="range" className="amplitude-song-slider"/>
              <progress id="song-played-progress"
                        className="amplitude-song-played-progress"></progress>
              <progress id="song-buffered-progress" className="amplitude-buffered-progress"
                        value="0"></progress>
            </div>

            <div className="time-container">
                <span className="current-time">
                  <span className="amplitude-current-minutes"></span>:<span
                  className="amplitude-current-seconds"></span>
                </span>
              <span className="duration">
                    <span className="amplitude-duration-minutes"></span>:<span
                className="amplitude-duration-seconds"></span>
                  </span>
            </div>
          </div>
        </div>

        <div id="white-player-controls">
          {/*<div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>*/}
          <div id="shuffle">  </div>
          <div className="amplitude-prev" id="previous"></div>
          <div className="amplitude-play-pause" id="play-pause"></div>
          <div className="amplitude-next" id="next"></div>
          {/*<div className="amplitude-repeat" id="repeat"></div>*/}
        </div>

        {/*{album ? <Playlist album={album} open={showPlaylist} onClose={closePlaylist}/> : null}*/}
      </div>
    </div>
  )
}

export default App
