import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../app/js/controllers/SpotifyWrapper';
import Const from '../app/js/helpers/Constant';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let stubedFetch;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper('token');
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exist the spotify.searchAlbums method', () => {
      expect(spotify.searchAlbums).to.exist;
    });

    it('should exist the spotify.searchArtists method', () => {
      expect(spotify.searchArtists).to.exist;
    });

    it('should exist the spotify.searchTracks method', () => {
      expect(spotify.searchTracks).to.exist;
    });

    it('should exist the spotify.searchPlaylists method', () => {
      expect(spotify.searchPlaylists).to.exist;
    });
  });

  describe('spotify.searchArtists', () => {
    it('should call fetch function', () => {
      spotify.searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Incubus&type=artist`);

      spotify.searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Muse&type=artist`);
    });
  });

  describe('spotify.searchAlbums', () => {
    it('should call fetch function', () => {
      spotify.searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Incubus&type=album`);

      spotify.searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Muse&type=album`);
    });
  });

  describe('spotify.searchTracks', () => {
    it('should call fetch function', () => {
      spotify.searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Incubus&type=track`);

      spotify.searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Muse&type=track`);
    });
  });

  describe('spotify.searchPlaylists', () => {
    it('should call fetch function', () => {
      spotify.searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Incubus&type=playlist`);

      spotify.searchPlaylists('Muse');
      expect(stubedFetch).to.have.been.calledWith(`${Const.API_URL}/search?q=Muse&type=playlist`);
    });
  });
});
