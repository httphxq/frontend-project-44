#!/usr/bin/env node
import { helloUser } from '../src/cli.js'
import { primeStart } from '../src/games/brain-prime.js'

const name = helloUser()
primeStart(name)
