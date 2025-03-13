const reverse = (list) => {
  let reversedList = null;
  let currentList = list;

  while (currentList) {
    reversedList = new Node(currentList.getValue(), reversedList);
    currentList = currentList.getNext();
  }

  return reversedList;
};
