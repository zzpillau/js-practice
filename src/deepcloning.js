const deep = () => {
    const user = { company: { name: 'Hexlet' } };
    const copyOfUser = Object.assign({}, user);
    console.log(user.name === copyOfUser.name);
    return copyOfUser;
};

console.log(deep());