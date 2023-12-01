const getGirlFriends = (data) => {
    const mapedFriends = data.map(({friends}) => friends);
    const flattenFriends = mapedFriends.flat();
    const filteredGirlFriends = flattenFriends.filter((friend) => friend.gender === 'female');
    return filteredGirlFriends;
};


const users = [
    {
    name: 'Tirion',
    friends: [
    { name: 'Mira', gender: 'female' },
    { name: 'Ramsey', gender: 'male' },
    ],
},
{ name: 'Bronn', friends: [] },
{
    name: 'Sam',
    friends: [
    { name: 'Aria', gender: 'female' },
    { name: 'Keit', gender: 'female' },
    ],
},
{
    name: 'Rob',
    friends: [
    { name: 'Taywin', gender: 'male' },
    ],
},
];


console.log(getGirlFriends(users));


