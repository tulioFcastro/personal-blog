import { authorService } from '@/service';

export default {
  getAuthors({ commit }) {
    return authorService.getAuthors().then(({ data }) => {
      commit('setAuthors', data);
      return data;
    });
  },
};
