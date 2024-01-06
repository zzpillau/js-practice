
const make = (url) => new URL(url);

const url = make('https://hexlet.io/community?q=low');
console.log(url);

const setProtocol = (data, protocol) => {
    data.protocol = protocol;
    return data;
}

console.log(setProtocol(url, 'http:'));

const toString = (data) => data.toString();

const getProtocol = (data) => data.protocol;

console.log(getProtocol(url));

const setHost = (data, host) => {
    data.host = host;
    return data;
}

const getHost = (data) => data.host;


console.log(setHost(url, 'code-basics.com'));

const setPath = (data, path) => {
    data.pathname = path;
    return data;
}

console.log(setPath(url, '/404'));

const getPath = (data) => data.pathname;

console.log(getPath(url));

console.log(toString(url));

const setQueryParam = (data, key, value) => {
    data.searchParams.set(key, value);
    return data;
}

console.log(setQueryParam(url, 'q', 'high'));

const getQueryParam = (data, paramName, defaultValue = null) => {
    return data.searchParams.get(paramName) ?? defaultValue;

}

console.log(toString(url));

console.log(getQueryParam(url, 'q'));