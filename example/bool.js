#!/usr/bin/env node
var util = require('util');
var argv = require('yargs').argv;

if (argv.s) {
    console.log(argv.fr ? 'Le chat dit: ' : 'The cat says: ');
}
console.log(
    (argv.fr ? 'miaou' : 'meow') + (argv.p ? '.' : '')
);
