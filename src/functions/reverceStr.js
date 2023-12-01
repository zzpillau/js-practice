
const reverse = (str) => {

       if (str === '') {
        return '';
    } 
    
    console.log(str.slice(1));
    console.log(str[0]);

    return `${reverse(str.slice(1))}${str[0]}`

};

// console.log(reverse('str'));    // rts
console.log(reverse('hexlet')); // telxeh