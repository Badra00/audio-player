import {Album} from "../types/album.ts";
import classNames from "classnames";

interface PlaylistProps {
  album: Album;
  open: boolean;
  onClose: () => void;
}

const Playlist = ({album, open, onClose}: PlaylistProps) => {
  return (
    <div id="white-player-playlist-container" className={classNames({"slide-out-top": !open, "slide-in-top": open})}>
      <div className="white-player-playlist-top">
        <div>

        </div>
        <div>
          <span className="queue">Queue</span>
        </div>
        <div>
          <img
            src="/icons/close.svg"
            className="close-playlist"
            onClick={onClose}
          />
        </div>
      </div>

      <div className="white-player-up-next">
        Up Next
      </div>

      <div className="white-player-playlist">
        {album && album.songs.map((song, index) => (
          <div
            key={song.title}
            className="white-player-playlist-song amplitude-song-container amplitude-play-pause"
            data-amplitude-song-index={index}
          >
            <img src={album.thumbnail}/>

            <div className="playlist-song-meta">
              <span className="playlist-song-name">{song.title}</span>
              <span
                className="playlist-artist-album">{album.artist}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="white-player-playlist-controls">
        <img data-amplitude-song-info="cover_art_url" className="playlist-album-art"/>

        <div className="playlist-controls">
          <div className="playlist-meta-data">
            <span data-amplitude-song-info="name" className="song-name"></span>
            <span data-amplitude-song-info="artist" className="song-artist"></span>
          </div>

          <div className="playlist-control-wrapper">
            <div className="amplitude-prev" id="playlist-previous"></div>
            <div className="amplitude-play-pause" id="playlist-play-pause"></div>
            <div className="amplitude-next" id="playlist-next"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist;
