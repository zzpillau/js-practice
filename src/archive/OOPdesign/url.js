// import { URL } from 'url';

const url = new URL('/courses?page=2', 'https://ru.hexlet.io');

export default class Url {
  constructor(http) {
    this.http = new URL(http);
  }

  getScheme() {
    return this.http.protocol.replace(':', '');
  }

  getHostName() {
    return this.http.hostname;
  }

  getQueryParams() {
    const queryString = this.http.search.replace('?', '');
    const searchParams = new URLSearchParams(queryString);
    const entries = searchParams.entries();

    return Object.fromEntries(entries);
  }

  getQueryParam(key, defaultValue = null) {
    const queryParams = this.getQueryParams();
    return queryParams[key] ?? defaultValue;
  }

  equals(newHttp) {
    const href1 = this.http.href;
    const href2 = newHttp.http.href;
    return href1 === href2;
  }
}

const yandexUrl = 'http://yandex.ru?key=value&key2=value2';
const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';

const res = new Url(yandexUrl);
console.log(res);

// console.log(res.getScheme());
// console.log(res.getHostName());
// console.log(res.getQueryParams());
// console.log(res.getQueryParam('key2', 'lala'));
console.log(res.equals(new Url(googleUrl)));