import { publicationService } from '@/service';

export default {
  getPublications({ commit }) {
    publicationService.getPublications().then(({ data }) => {
      commit('setPublications', data);
      return data;
    });
  },
};
