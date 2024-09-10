const run = (text) => {
// BEGIN (write your solution here)
    const takeLast = (str, num) => {
        console.log(str);
        console.log(str.length);
        console.log();
        if (str.length === 0 || str.length < num) {
        return null;
        }
        let newStr = '';
        for (let i = str.length - 1; i >= str.length - num; i -= 1) {
            console.log(i);
            console.log(str[i]);
            newStr = `${newStr}${str[i]}`;
            console.log(newStr);
        }
        return newStr;
    }
// END

return takeLast(text, 4);
};


console.log(run('hexlet')); // telx