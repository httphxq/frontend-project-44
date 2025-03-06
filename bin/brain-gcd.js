#!/usr/bin/env node
import { helloUser } from '../src/cli.js';
import { gcdStart } from '../src/games/brain-gcd.js';
const name = helloUser();
gcdStart(name);