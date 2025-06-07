#!/usr/bin/env node

import helloUser from '../src/cli.js'
import runGame from '../src/index.js'
import game from '../src/games/brain-calc.js'

const name = helloUser()
runGame(game.description, game.gameLogic, name)
