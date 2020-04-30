import authorGetters from '@/store/modules/author/getters';

describe('Author Module: getters', () => {
  describe('#getName', () => {
    it('should return the author name', () => {
      const name = 'name',
        id = 1,
        state = {
          items: [{ id, name }],
        };
      expect(authorGetters.getName(state)(id)).toBe(name);
    });

    it('should return empty string if have not specific id', () => {
      const name = 'name',
        id = 1,
        state = {
          items: [{ id, name }],
        };
      expect(authorGetters.getName(state)(2)).toBe('');
    });

    it('should return empty string if items is empty', () => {
      const state = {
        items: [],
      };
      expect(authorGetters.getName(state)(1)).toBe('');
    });
  });
});
