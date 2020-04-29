import { authorService } from '@/service';

export default {
  getAuthors({ commit }) {
    authorService.getAuthors().then(({ data }) => {
      commit('setAuthors', data);
      return data;
    });
  },
};
