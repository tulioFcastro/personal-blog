import { authorService } from '@/service';
import authorAction from '@/store/modules/author/actions';

jest.mock('@/service');

describe('Author Module: action', () => {
  const commit = jest.fn();

  beforeEach(() => {
    commit.mockClear();
  });

  describe('#getAuthors', () => {
    const response = {
      data: [{ id: '121212' }],
    };

    beforeEach(() => {
      authorService.getAuthors.mockResolvedValueOnce(response);
    });

    it('should call #getAuthors method from author service', () => {
      expect(authorService.getAuthors).not.toHaveBeenCalled();

      authorAction.getAuthors({ commit });

      expect(authorService.getAuthors).toHaveBeenCalled();
    });

    it('should commits #setAuthors mutation', async () => {
      expect(commit).not.toHaveBeenCalled();

      await authorAction.getAuthors({ commit });

      expect(commit).toHaveBeenCalledWith('setAuthors', response.data);
    });
  });
});
