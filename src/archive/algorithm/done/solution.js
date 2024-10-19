import LinkedList from './lists/LinkedList.js';
import getListFromArray from "./helpers/helpers.js";

const solution = (item) => {

  let list = getListFromArray(item);

  let newList = new LinkedList()

  while(!list.isEmpty()) {

    if (list.tail !== null) {
    console.log(list.isEmpty());
    console.log(list.tail);
    

    // console.log(list.tail.next);
    

    const tail = list.tail.value;

    // console.log(tail);
    
      list.delete(tail);
      newList.append(tail);

      // console.log(newList.toArray());
    } else {
    return newList.toArray();
    }
      
  }
  // return newList.toArray();
}


const items = [[10, 20], 0, -1, ['hey']];


console.log(solution(items));

// [['hey'], -1, 0, [10, 20]]

// console.log(solution([]));
 // []