declare module "amplitudejs" {
  export default class Amplitude {
    static init(param: {
      songs: ({
        artist: string;
        album: string;
        name: string;
        cover_art_url: string;
        url: string
      })[]
    }) {
    }
  }
}
