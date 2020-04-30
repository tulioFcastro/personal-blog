import authorApi from '@/service/author';
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

  describe('#getAuthors', () => {
    beforeEach(() => {
      authorApi.getAuthors().then(resp);
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
            expect(url).toBe('5be5e3ae2f00005b000fc3f6');
            done();
          });
      });
    });
  });
});
