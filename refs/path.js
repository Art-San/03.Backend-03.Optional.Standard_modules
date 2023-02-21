// предоставления утилитов для работы 
// с путями к файлам и каталогам

const path = require('path')

console.log(path.dirname(__filename))           //  D:\1 Webpack, rollup\1. Проэкты обучение\03_module_node\03.Backend-03.Optional. Standard modules\refs
console.log(path.basename(__filename))          // path.js
console.log(path.extname(__filename))           // .js получаем расширение 
console.log(path.extname(__filename).slice(1))  // js без точки


// console.log(path.parse(__filename))       // {
                                            //     root: 'D:\\',
                                            //     dir: 'D:\\1 Webpack, rollup\\1. Проэкты обучение\\03_module_node\\03.Backend-03.Optional. Standard modules\\refs',
                                            //     base: 'path.js',
                                            //     ext: '.js',
                                            //     name: 'path'
                                            // }

// певый вар пытается найти путь
console.log(path.resolve(__dirname, '..', './modules', './app.js'))  // D:\1 Webpack, rollup\1. Проэкты обучение\03_module_node\03.Backend-03.Optional. Standard modules\modules\app.js      
console.log(path.join(__dirname, '..', './modules', './app.js'))     // D:\1 Webpack, rollup\1. Проэкты обучение\03_module_node\03.Backend-03.Optional. Standard modules\modules\app.js                            