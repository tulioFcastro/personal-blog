export default {
  getName: state => authorId => {
    if (state.items.length) {
      const author = state.items.find(pub => pub.id === authorId);
      return author ? author.name : '';
    }
    return '';
  },
};
