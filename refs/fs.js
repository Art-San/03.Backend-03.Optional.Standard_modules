//fs- взаимодействия с файловой системой способом, 
// смоделированным на основе стандартных функций POSIX
const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')

const getContent = () => `
    \r${process.argv[2] ?? ''}
`

async function start () {
    try {
        if (fsSync.existsSync(base)) {               // проверяем сущечствованя пути (папки. файл)
            await fs.appendFile(path.join(base, 'logs.txt'), getContent())            // appendFile добавить 
            const data = await fs.readFile(path.join(base, 'logs.txt'), {encoding: 'utf-8'})  // readFile читать
              console.log(data)   
        } else {
            await fs.mkdir(base)                                                       // mkdir- отвечает за создание новой папки
            await fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')     // writeFile- создание файла
        }                                                                              // process.argv[2]  забираем из консоли (есть два элемента, сответсвенно третий по [2] это тот контент что мы передадим)
    } catch (err) {
        console.log('err', err)
    }
}

start()

// ====================================================

// async function start () {
//     try {
//         await fs.mkdir(base)
//         console.log('folder created')
//         await fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
//     } catch (err) {
//         console.log('err', err)
//     }
// }

// start()

// mkdir- отвечает за создание новой папки
// fs.mkdir(base).then(() => {
//     console.log('folder created')
// }).catch((err) => {
//     console.log('err', err)
// })