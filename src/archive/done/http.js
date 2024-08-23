import axios from 'axios';
import { URL } from 'url';

const getBadLinks = async () => {
  const response = await axios.get('https://ru.hexlet.io');
  const links = extractLinks(response.data);
  const promises = await links.filter(async (link) => {
    await axios.get(link)
    .then(() => console.log(null, link))
    .catch(() => console.log(link));
  });
  // const array = await (promises);
  return await Promise.all(promises);
};



const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};


// const checkBadLink = async (link) => {
//   const response = await axios.get(link);
//   console.log(response.status);
//   // return response.status < 200 && response.status > 299;
// }


// const getBadLinks = async (url) => {
//   const response = await axios.get(url);
//   const links = extractLinks(response.data);
//   console.log(links);
//   const result = await Promise.all(links.filter((link) => ));
//   return result;
// }


const link = 'https://ru.hexlet.io';


const links = await getBadLinks(link);

// console.log(checkBadLink(link));