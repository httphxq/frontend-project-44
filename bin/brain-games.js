#!/usr/bin/env node

import helloUser from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const name = helloUser()
console.log(`Hello, ${name}!`)
