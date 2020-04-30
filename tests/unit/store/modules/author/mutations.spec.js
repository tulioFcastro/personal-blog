import mutations from '@/store/modules/author/mutations';

describe('Author Module: mutations', () => {
  it('#setAuthors set state items', () => {
    const state = {
        items: [],
      },
      authors = [{ id: 1, name: 'name' }];

    mutations.setAuthors(state, authors);

    expect(state.items.length).toBe(1);
    expect(state.items[0].id).toBe(authors[0].id);
    expect(state.items[0].name).toBe(authors[0].name);
  });
});
