import { publicationService } from '@/service';
import publicationAction from '@/store/modules/publication/actions';

jest.mock('@/service');

describe('Author Module: action', () => {
  const commit = jest.fn();

  beforeEach(() => {
    commit.mockClear();
  });

  describe('#getPublications', () => {
    const response = {
      data: [{ id: '121212' }],
    };

    beforeEach(() => {
      publicationService.getPublications.mockResolvedValueOnce(response);
    });

    it('should call #getPublications method from author service', () => {
      expect(publicationService.getPublications).not.toHaveBeenCalled();

      publicationAction.getPublications({ commit });

      expect(publicationService.getPublications).toHaveBeenCalled();
    });

    it('should commits #setPublications mutation', async () => {
      expect(commit).not.toHaveBeenCalled();

      await publicationAction.getPublications({ commit });

      expect(commit).toHaveBeenCalledWith('setPublications', response.data);
    });
  });
});
