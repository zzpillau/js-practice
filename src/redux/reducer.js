// @ts-nocheck

import { createStore } from 'redux';

// Counter

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const storeCounter = createStore(reducerCounter, 100)

storeCounter.subscribe(() => console.log(storeCounter.getState()));

const increment = () => ({type: 'INCREMENT'});
const decrement  = () => ({type: 'DECREMENT'});

console.log('disp inc')
storeCounter.dispatch(increment())

console.log('disp dec')

storeCounter.dispatch(decrement())
 
// USER

const addUser = (user) => ({type: 'USER_ADD', payload: { user }});
const removeUser = (id) => ({type: 'REMOVE_USER', payload: { id }});

const reducerUser = (state = [], action) => {
  switch (action.type) {
    case 'USER_ADD': {
      const { user } = action.payload;
      return [...state, user]
    }
    case 'REMOVE_USER': {
      const {id} = action.payload;
      return state.filter(u => u.id !== id);
    }
    default:
      return state;
  }
}

const user = {
  name: 'Peter',
  id: 1,
}

const user2 = {
  name: 'Mike',
  id: 2,
}


const user3 = {
  name: 'John',
  id: 3,
}


const storeUser = createStore(reducerUser)

storeUser.subscribe(() => console.log(storeUser.getState()));

storeUser.dispatch(addUser(user));
storeUser.dispatch(addUser(user2));
storeUser.dispatch(addUser(user3));


storeUser.dispatch(removeUser(2));
storeUser.dispatch(removeUser(1));



