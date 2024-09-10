import fs from 'fs'
const content = fs.readFileSync("/home/zzpillau/js-practice/src/functions/env/s.conf", 'utf-8');

// const getForwardedVariables = (content) => {
  
//   const splittedCont = content.split('\n');

//   const filteredEnv = splittedCont.filter((str) => str.startsWith('env') && str.includes('X_FORWARDED_'))

//   const res = filteredEnv.map((str) => {
//     const cleared = str.replace('environment=', '').split(',')
//     return cleared;
//   })

//   const flatten = res.flat()

//   const filter2 = flatten.filter(item => item.includes('FOR'))

//   const result = filter2.map((item) => {
//     return item.replaceAll('"', '').replace('X_FORWARDED_', '')
//   })

//   return result.join(',');
// }

const getForwardedVariables = (content) => {
  const splittedContent = content.split('\n')
    .filter((str) => str.startsWith('env') && str.includes('X_FORWARDED_'))
    .map((str) => str.replace('environment=', '').split(','))

  const clearedContent = splittedContent.flat()
    .filter(item => item.includes('FOR'))
    .map((item) => {
    return item.replaceAll('"', '').replace('X_FORWARDED_', '')
  })
  return clearedContent.join(',')
}

const result = getForwardedVariables(content);
console.log(result); // => "MAIL=tirion@google.com,HOME=/home/tirion,var3=value"