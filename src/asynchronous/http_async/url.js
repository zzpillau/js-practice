import url from 'url'; 
import querystring from 'querystring';

const { URL } = url;

const parsedURL = new URL ('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(parsedURL);

const str = 'w=%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82&foo=bar';

const parsedStr = querystring.parse(str);

console.log(parsedStr);

const stringifiedStr = querystring.stringify(parsedStr);

console.log(stringifiedStr);


const url1 = 'https://hexlet.io/?q=%D1%8D%D1%80%D0%BB%D0%B0%D0%BD%D0%B3';

const { search } = new URL(url1);

const qs = querystring.parse(search);

console.log(qs['?q']);

console.log(encodeURI('эрланг'));
console.log(decodeURI('эрланг'));

const { searchParams } = new URL(url1);

console.log(searchParams);

const query = Object.fromEntries(searchParams);

console.log(query);

const url2 = new URL('/my', 'https://hexlet.io');
console.log(url2);

url2.searchParams.set('page', 5)

console.log(url2.toString( ));
