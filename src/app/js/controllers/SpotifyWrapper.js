import Const from '../helpers/Constant';

export default class SpotifyWrapper {
  constructor(token, url = Const.API_URL) {
    if (!token) {
      throw new Error('É obrigatório a passagem do argumento token.');
    }

    this.apiURL = url;
    this.token = token;
  }
}
