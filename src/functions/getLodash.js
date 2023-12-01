const getMenCountByYear = (users) => users

    .filter((user) => user.gender === 'male')

    .map((user) => user.birthday.slice(0, 4))

    .reduce((acc, year) => {

        acc[year] = (acc[year] ?? 0) + 1;

        return acc;

    }, {})


    // @ts-check

import _ from 'lodash';

// BEGIN
const getMenCountByYear = (users) => {
  const men = users.filter(({ gender }) => gender === 'male');

  const years = men.map(({ birthday }) => birthday.slice(0, 4));

  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});
};

export default getMenCountByYear;
// END
