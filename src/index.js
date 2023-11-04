#!/usr/bin/env node

export default () => console.log('Welcome to my application');

import { program } from 'commander';

const hello = (name) => {
    return `Hello, ${name}!`;
};

const greeting = (names, lower, upper) => {
    for (const name of names) {
        const msg = hello(name);
        if (lower) {
            console.log(msg.toLowerCase());
        } else if (upper) {
            console.log(msg.toUpperCase());
        } else {
            console.log(msg);
        }
    }
}


program
    .option('-l, --lower', 'only use lowercase letters')
    .option('-u, --upper', 'only use uppercase letters')
    .parse(process.argv);

const { args } = program;
const options = program.opts()
const { lower, upper } = options;


greeting(args, lower, upper);

