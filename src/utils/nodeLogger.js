/***
 * @repo: https://gitlab.com/Chayuan/logger-node
 * @author: Chayuan <Gwenaël Robert>
 ***/

var readline = require('readline')

const Reset = '\x1b[0m'
const Bright = '\x1b[1m'
const Dim = '\x1b[2m'
const Underscore = '\x1b[4m'
const Blink = '\x1b[5m'
const Reverse = '\x1b[7m'
const Hidden = '\x1b[8m'

const FgBlack = '\x1b[30m'
const FgRed = '\x1b[31m'
const FgGreen = '\x1b[32m'
const FgYellow = '\x1b[33m'
const FgBlue = '\x1b[34m'
const FgMagenta = '\x1b[35m'
const FgCyan = '\x1b[36m'
const FgWhite = '\x1b[37m'
const FgOrange = '\x1b[33m'
const BgBlack = '\x1b[40m'
const BgRed = '\x1b[41m'
const BgGreen = '\x1b[42m'
const BgYellow = '\x1b[43m'
const BgBlue = '\x1b[44m'
const BgMagenta = '\x1b[45m'
const BgCyan = '\x1b[46m'
const BgWhite = '\x1b[47m'

class Logger {
  constructor() {
    this.interval = null
    this.loadingArray = ['\\', '|', '/', '-']
  }

  log() {
    if (arguments.length > 0) {
      console.log(...arguments, Reset)
    } else {
      process.stdout.write(Reset)
      console.log()
    }
    return this
  }

  success() {
    process.stdout.write(BgGreen)
    return this
  }

  greenBg() {
    return this.success()
  }

  green() {
    process.stdout.write(FgGreen)
    return this
  }

  error() {
    process.stdout.write(BgRed)
    return this
  }

  redBg() {
    return this.error()
  }

  red() {
    process.stdout.write(FgRed)
    return this
  }

  yellowBg() {
    process.stdout.write(BgYellow)
    process.stdout.write(FgBlack)
    return this
  }

  cyanBg() {
    process.stdout.write(BgCyan)
    return this
  }

  cyan() {
    process.stdout.write(FgCyan)
    return this
  }

  blueBg() {
    process.stdout.write(BgBlue)
    return this
  }

  blue() {
    process.stdout.write(FgBlue)
    return this
  }

  yellow() {
    process.stdout.write(FgYellow)
    return this
  }

  magentaBg() {
    process.stdout.write(BgMagenta)
    return this
  }

  magenta() {
    process.stdout.write(FgMagenta)
    return this
  }

  whiteBg() {
    process.stdout.write(BgWhite)
    process.stdout.write(FgBlack)
    return this
  }

  white() {
    return this
  }

  magenta() {
    process.stdout.write(FgMagenta)
    return this
  }

  underscore() {
    process.stdout.write(Underscore)
    return this
  }

  startLoading(message) {
    let i = 0
    this.interval = setInterval(() => {
      process.stdout.clearLine()
      process.stdout.cursorTo(0)
      process.stdout.write(FgOrange)
      process.stdout.write(`${this.loadingArray[i % 4]}`)
      process.stdout.write(Reset)
      process.stdout.write(` --- ${message}`)
      i += 1
    }, 300)
  }

  line() {
    const nbCol = process.stdout.columns
    let myString = ''
    for (let i = 0; i < nbCol; ++i) {
      myString += '-'
    }
    console.log(myString)
    return this
  }

  stopLoading(message, loadingStatus) {
    if (this.interval) {
      process.stdout.clearLine()
      process.stdout.cursorTo(0)
      switch (loadingStatus) {
        case 'error':
          console.log(FgRed, 'X', Reset, `--- ${message}`)
          break
        case 'warning':
          console.log(FgOrange, 'X', Reset, `--- ${message}`)
          break
        default:
          console.log(FgGreen, 'V', Reset, `--- ${message}`)
      }
      clearInterval(this.interval)
    }
  }

  cl(message) {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    readline.cursorTo(process.stdout, 0)
    if (message) process.stdout.write(`${message}`)
  }

  consoleClear() {
    console.log('\\033[2J')
  }

  consoleReset() {
    console.clear()
  }

  async wrap(message, promiseToWrap, params) {
    return new Promise(async (resolve, reject) => {
      const oldConsoleLog = console.log

      try {
        this.startLoading(message)

        console.log = logParams => {
          this.cl()
          oldConsoleLog('\t', '-', logParams)
        }

        const returnValue = params
          ? await promiseToWrap(...params)
          : await promiseToWrap()
        console.log = oldConsoleLog

        this.stopLoading(message, 'success')

        resolve(returnValue)
      } catch (e) {
        console.log = oldConsoleLog
        this.stopLoading(message, 'error')
        reject(e)
      }
    })
  }
}

module.exports = new Logger()