/* global fetch */

const handleErrors = (res) => {
  if (!res.ok) throw new Error(res.statusText);

  return res;
};

export default class HttpService {
  constructor() {
    throw new Error('Essa classe não pode ser instanciada');
  }

  static get(url, token) {
    return fetch(url, {
      headers: { Authorization: `'Bearer ${token}'` },
    })
    .then(res => handleErrors(res))
    .then(res => res.json());
  }
}
