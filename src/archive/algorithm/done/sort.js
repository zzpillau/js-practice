const partition = (items, left, right, pivot, direction) => {
  while (true) {

    if (direction === 'asc') {
    while (items[left] < pivot) {
      left += 1;
    }

    while (items[right] > pivot) {
      right -= 1;
    }
  }

  if (direction === 'desc') {
    while (items[left] > pivot) {
      left += 1;
    }

    while (items[right] < pivot) {
      right -= 1;
    }
  }

    if (left >= right) {
      return right + 1;
    }

    const temporary = items[left];
    items[left] = items[right];
    items[right] = temporary;

    left += 1;
    right -= 1;
  }

};

const sort = (items, left, right, direction) => {
  const length = right - left + 1;

  if (length < 2) {
    return;
  }

  const pivot = items[left];

  const splitIndex = partition(items, left, right, pivot, direction);
  sort(items, left, splitIndex - 1, direction);
  sort(items, splitIndex, right, direction);
};


const quickSort = (items, direction = 'asc') => {
  const newItems = items.slice();
  sort(newItems, 0, newItems.length - 1, direction);
  return newItems;
};

const items = [10, 20, 0, -1];

console.log(quickSort(items));


 // [-1, 0, 10, 20]
console.log(quickSort([]));

 // []
console.log(quickSort(items, 'desc'));
 // [20, 10, 0, -1]
  


