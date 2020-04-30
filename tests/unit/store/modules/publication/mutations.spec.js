import mutations from '@/store/modules/publication/mutations';

describe('Publication Module: mutations', () => {
  it('#setPublications set state items', () => {
    const state = {
        items: [],
      },
      publications = [{ id: 1 }];

    mutations.setPublications(state, publications);

    expect(state.items.length).toBe(1);
    expect(state.items[0].id).toBe(publications[0].id);
  });
});
