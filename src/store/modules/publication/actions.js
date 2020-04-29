import { publicationService } from '@/service';

export default {
  getPublications({ commit }) {
    return publicationService.getPublications().then(({ data }) => {
      commit('setPublications', data);
      return data;
    });
  },
};
