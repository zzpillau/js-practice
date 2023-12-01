import _ from 'lodash';


_.sortBy()
Date.parse()

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];


users.sort((a, b) => {




});

const takeOldest = (obj, count = 1) => {
    const sortedObj = _.sortBy(obj, ({ birthday }) => Date.parse(birthday));
    return sortedObj.slice(0, count);
};

console.log(takeOldest(users, 2));

