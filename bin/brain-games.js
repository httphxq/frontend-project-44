#!/usr/bin/env node

import { helloUser } from '../src/cli.js'
import { evenStart } from '../src/games/brain-even.js'
import { calcStart } from '../src/games/brain-calc.js'
import { gcdStart } from '../src/games/brain-gcd.js'
import { progressionStart } from '../src/games/brain-progression.js'
import { primeStart } from '../src/games/brain-prime.js'

const name = helloUser()
evenStart(name)
calcStart(name)
gcdStart(name)
progressionStart(name)
primeStart(name)
