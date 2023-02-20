import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
console.log(__filename)



// import { Playground } from './playground.js'
// console.log(Playground.NUM)