#!/usr/bin/env node
import { helloUser } from '../src/cli.js';
import { evenStart } from '../src/games/brain-even.js';

const name = helloUser();
evenStart(name);
