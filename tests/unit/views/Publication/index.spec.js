import PublicationComponent from '@/views/Publication';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import flushPromises from 'flush-promises';

jest.mock('@/components/Placeholder', () => ({}));
jest.mock('@/views/Publication/components/DisplayOptions', () => ({}));
jest.mock('@/views/Publication/components/Card', () => ({}));

describe('PublicationComponent', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const publications = [{ id: 1 }],
    store = {
      modules: {
        author: {
          namespaced: true,
          actions: {
            getAuthors: jest.fn().mockResolvedValue({ data: [{ id: 2 }] }),
          },
        },
        publication: {
          namespaced: true,
          actions: {
            getPublications: jest.fn().mockResolvedValue({ data: [{ id: 1 }] }),
          },
          state: {
            items: publications,
          },
        },
      },
    };

  describe('when is loading', () => {
    beforeEach(() => {
      store.modules.publication.state.items = [];
      wrapper = mountWrapper(localVue, store);
    });

    it('should display a div with placeholder component', async () => {
      expect(wrapper.find('placeholder-stub').exists()).toBeTruthy();
      await flushPromises();
    });
  });

  describe('when is not loading', () => {
    beforeEach(async () => {
      store.modules.publication.state.items = publications;
      wrapper = mountWrapper(localVue, store);
      await Vue.nextTick();
    });

    it('should not display a div with placeholder component', () => {
      expect(wrapper.find('placeholder-stub').exists()).toBeFalsy();
    });

    it('should display DisplayOptions and Cards components', () => {
      expect(wrapper.find('display-options-stub').exists()).toBeTruthy();
      expect(wrapper.find('card-stub').exists()).toBeTruthy();
    });

    describe('when DisplayOptions emits "clicked"', () => {
      const style = {
        card: { width: '100%' },
        div: { width: '100%' },
      };

      it('should set style data', async () => {
        expect(wrapper.vm.style).toEqual({ card: {}, div: {} });

        wrapper.find('display-options-stub').vm.$emit('clicked', style);
        await Vue.nextTick();

        expect(wrapper.vm.style).toEqual(style);
      });
    });
  });
});

function mountWrapper(localVue, store) {
  return shallowMount(PublicationComponent, {
    localVue,
    mocks: {
      $store: new Vuex.Store(store),
    },
  });
}
