import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import HttpService from '../app/js/services/HttpService';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper HttpService', () => {
  describe('get method', () => {
    let stubedFetch;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('should have get method', () => {
      expect(HttpService.get).to.exist;
    });

    it('should call fetch when get', () => {
      HttpService.get('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      HttpService.get('apiURL');
      expect(stubedFetch).to.have.been.calledWith('apiURL');
    });
  });
});
