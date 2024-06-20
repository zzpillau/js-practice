import _ from 'lodash';

const normalize = (countries) => {

  const newCountriesColl = countries;

  const normNames = newCountriesColl.map(({ name, country }) => [country.toLowerCase().trimStart().trimEnd(), name.toLowerCase().trimStart().trimEnd()]);

  return normNames.sort().reduce((acc, [country, name], i, arr) => {
    if (!acc[country]) {
      acc[country] = [name]
    };
    if (!acc[country].includes(name)) {
      acc[country].push(name)
    }
    return acc;
  }, {});
}

const countries = [
  { name: 'istanbul', country: 'turkey' },
  { name: 'Moscow ', country: ' Russia' },
  { name: 'iStanbul', country: 'tUrkey' },
  { name: 'antalia', country: 'turkeY ' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Miami', country: 'usa' },
];

console.log(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }