const getMutualFriends = (user1, user2) => {
  const user1friends = user1.getFriends();
  const user2friends = user2.getFriends();

  const getIds = (users) => users
    .map((user) => user.id);
  
  const user1friendsIds = getIds(user1friends);
  const user2friendsIds = getIds(user2friends);
  
  return user1friendsIds.filter((id) => user2friendsIds.includes(id));
}


const makeUser = ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
      return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
    },
  });

  const user1 = makeUser({
    friends: [
      makeUser({ id: 1 }),
      makeUser({ id: 2 }), // общий друг
    ],
  });
  const user2 = makeUser({
    friends: [
      makeUser({ id: 2 }), // общий друг
      makeUser({ id: 3 }),
    ],
  });
  
  console.log(getMutualFriends(user1, user2));
  
  // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ]
  
