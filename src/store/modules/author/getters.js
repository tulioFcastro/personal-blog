export default {
  getName: state => authorId => (state.items.length ? state.items.find(pub => pub.id === authorId).name : ''),
};
