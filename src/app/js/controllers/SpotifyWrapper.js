import Const from '../helpers/Constant';
import HttpService from '../services/HttpService';

export default class SpotifyWrapper {
  constructor(token, url = Const.API_URL) {
    if (!token) {
      throw new Error('É obrigatório a passagem do argumento token.');
    }

    this.apiURL = url;
    this.token = token;
  }

  album(id) {
    return HttpService.get(`${this.apiURL}/albums/${id}`, this.token);
  }

  albums(...ids) {
    return HttpService.get(`${this.apiURL}/albums/?ids=${ids}`, this.token);
  }

  albumTracks(id) {
    return HttpService.get(`${this.apiURL}/albums/${id}/tracks`, this.token);
  }

  searchArtists(query) {
    return this.searcher(query, Const.ARTIST);
  }

  searchAlbums(query) {
    return this.searcher(query, Const.ALBUM);
  }

  searchTracks(query) {
    return this.searcher(query, Const.TRACK);
  }

  searchPlaylists(query) {
    return this.searcher(query, Const.PLAYLIST);
  }

  searcher(query, type) {
    return HttpService.get(`${this.apiURL}/search?q=${query}&type=${type}`, this.token);
  }
}
