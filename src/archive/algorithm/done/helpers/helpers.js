import LinkedList from '../lists/LinkedList.js';

const getListFromArray = (collection) => {
  const linkedList = new LinkedList();

  // eslint-disable-next-line
  for (const item of collection) {
    linkedList.append(item);
  }

  return linkedList;
};

export default getListFromArray;
