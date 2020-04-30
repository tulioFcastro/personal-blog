import publicationApi from '@/service/publication';
import axios from '@/service/axios';
import moxios from 'moxios';

describe('Author service', () => {
  const resp = jest.fn();

  beforeEach(() => {
    moxios.install(axios);
    jest.clearAllMocks();
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  describe('#getPublications', () => {
    beforeEach(() => {
      publicationApi.getPublications().then(resp);
    });

    it('should be a GET method', done => {
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: 'ok',
          })
          .then(() => {
            expect(resp.mock.calls[0][0].config.method).toBe('get');
            done();
          });
      });
    });

    it('should call with correct url', done => {
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: 'ok',
          })
          .then(() => {
            const url = resp.mock.calls[0][0].config.url;
            expect(url).toBe('5be5e3fa2f000082000fc3f8');
            done();
          });
      });
    });
  });
});
