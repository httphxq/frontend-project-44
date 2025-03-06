#!/usr/bin/env node
import helloUser from '../src/cli.js';
import calcStart from '../src/games/brain-calc.js';

const name = helloUser();
calcStart(name);
