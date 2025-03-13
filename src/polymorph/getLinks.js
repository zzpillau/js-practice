const mapping = {
  a: 'href',
  img: 'src',
  link: 'href',
};

const getLinks = (tags) => {
  const filteredTags = tags.filter((tag) => Object.hasOwn(mapping, tag.name));
  const paths = filteredTags.map((tag) => tags[mapping[tag.name]]);
  return paths;
};
