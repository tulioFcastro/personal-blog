import DisplayOptionsComponent from '@/views/Publication/components/DisplayOptions';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('DisplayOptionsComponent', () => {
  const localVue = createLocalVue();

  let wrapper;

  beforeEach(() => {
    wrapper = mountWrapper(localVue);
  });

  it('should have twice circle classes', () => {
    expect(wrapper.findAll('.circle').length).toBe(2);
  });

  describe.each`
    circle     | index | type
    ${'first'} | ${0}  | ${'grid'}
    ${'last'}  | ${1}  | ${'list'}
  `('$circle circle', ({ index, type }) => {
    it('should have an icon', () => {
      expect(
        wrapper
          .findAll('.circle')
          .at(index)
          .find('i')
          .exists()
      ).toBeTruthy();
    });

    describe('when click', () => {
      beforeEach(() => {
        wrapper.setData({ selected: null });
      });

      it(`should emit clicked with style type data and set selected to "${type}"`, () => {
        expect(wrapper.emitted().clicked).toBeFalsy();
        expect(wrapper.vm.selected).not.toBe(type);

        wrapper
          .findAll('.circle')
          .at(index)
          .trigger('click');

        expect(wrapper.emitted().clicked).toBeTruthy();
        expect(wrapper.vm.selected).toBe(type);
      });
    });
  });
});

function mountWrapper(localVue) {
  return shallowMount(DisplayOptionsComponent, {
    localVue,
  });
}
