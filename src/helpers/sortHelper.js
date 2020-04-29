const sortAsc = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (b.title < a.title) {
    return 1;
  }
  return 0;
};

const sortDesc = (a, b) => {
  if (a.title > b.title) {
    return -1;
  }
  if (b.title > a.title) {
    return 1;
  }
  return 0;
};

const sortDateAsc = (a, b) => a.metadata.publishedAt - b.metadata.publishedAt;
const sortDateDesc = (a, b) => b.metadata.publishedAt - a.metadata.publishedAt;

export default {
  sortAsc,
  sortDesc,
  sortDateAsc,
  sortDateDesc,
};
