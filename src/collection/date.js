import lodash from 'lodash';
import { eachDayOfInterval, format } from 'date-fns';
import { cs } from 'date-fns/locale';

const { keyBy, get } = lodash;


const normalizeData = (dates, beginDate, endDate) => {
  const interval = eachDayOfInterval({
    start: new Date(beginDate.split('-')),
    end: new Date(endDate.split('-')), 
  });

    const intervalObj = interval.reduce((acc, date) => {
    const formateddate = format(date, "dd.MM.yyyy");
    const defaultValue = 0;
    return {...acc, [formateddate]: defaultValue };
  }, {}
  );

  console.log(intervalObj, 'intervalObj');

  const set = new Set(Object.keys(intervalObj));
  // console.log(set);
  
  const dataObj = dates
    .reduce((acc, {value, date}) => (set.has(date) ? {...acc, [date]: value} : {...acc}), {});

  const joined = {...intervalObj, ...dataObj};
  console.log(joined);

  
  const output = Object
    .entries(joined)
    .map(([date, value]) => ({value, date}));

    return output;  
}



const data = [
  { value: 14, date: '31.07.2018' },
  { value: 14, date: '01.08.2018' },
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
  { value: 38, date: '05.08.2018' },
];
const begin = '2018-08-02';
const end = '2018-08-07';

// const expected = [
//   { value: 14, date: '02.08.2018' },
//   { value: 43, date: '03.08.2018' },
//   { value: 0, date: '04.08.2018' },
//   { value: 38, date: '05.08.2018' },
//   { value: 0, date: '06.08.2018' },
//   { value: 0, date: '07.08.2018' },
// ];

// const data = [
//   { value: 14, date: '02.08.2018' },
//   { value: 43, date: '03.08.2018' },
//   { value: 38, date: '05.08.2018' },
// ];

// const begin = '2018-08-01';
// const end = '2018-08-06';


console.log(normalizeData(data, begin, end))



// const interval = eachDayOfInterval({
//   start: new Date(begin.split('-')),
//   end: new Date(end.split('-')), 
// });

// console.log(interval);

// const formatedObj = interval.reduce((acc, date) => {

//   const formateddate = format(date, "dd.MM.yyyy");
//   const defaultValue = 0;
  
//   return {...acc, [formateddate]: defaultValue };

// }, {}
// ); // добавляет 1,где надо!


// console.log(formatedObj);




// console.log(data);

// const dataObj = data.reduce((acc, {value, date}) => ({...acc, [date]: value}), {});

// console.log(dataObj);



// const joined = {...formatedObj, ...dataObj};

// console.log(joined);

// const output = Object.entries(joined).map(([date, value]) => ({value, date}));

// console.log(output);






















