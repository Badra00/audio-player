export interface Song {
  title: string;
  url: string;
}

export interface Album {
  name: string;
  artist: string;
  thumbnail: string;
  songs: Song[];
}
