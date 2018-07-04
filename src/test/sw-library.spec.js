import { describe, it } from 'mocha';
import { expect } from 'chai';
import SpotifyWrapper from '../app/js/controllers/SpotifyWrapper';

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper('token');
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper('foo');
    expect(spotify.token).to.be.equal('foo');
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper('token', 'blabla');
    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper('token');
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });
});
