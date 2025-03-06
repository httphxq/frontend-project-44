#!/usr/bin/env node
import helloUser from '../src/cli.js';
import progressionStart from '../src/games/brain-progression.js';

const name = helloUser();
progressionStart(name);
