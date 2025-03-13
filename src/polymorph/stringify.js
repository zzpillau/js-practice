const excludeAttrs = ['name', 'tagType', 'body'];

const buildAttrs = (tag) => Object.keys(tag)
  .filter((attr) => !excludeAttrs.includes(attr))
  .map((attr) => ` ${attr}="${tag[attr]}"`)
  .join('');

const mapping = {
  single: (tag) => {
    const attrs = buildAttrs(tag);
    return `<${tag.name}${attrs}>`;
  },
  pair: (tag) => {
    const attrs = buildAttrs(tag);
    return `<${tag.name}${attrs}>${tag.body}</${tag.name}>`;
  },
};

const stringify = (tag) => {
  const build = mapping[tag.tagType];
  return build(tag);
};

const divTag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
const html = stringify(divTag); // <div id="wow">text2</div>

console.log(html);
