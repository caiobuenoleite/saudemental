const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    // if (req.url === '/protocolos') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index2.html'),
    //         (err, content) => {
    //             if (err) throw err
    //             res.end(content)
    //         }
    //     )
    // }


    // else if (req.url === '/segundoSB')

    // const filePath = path.join(__dirname, 'public', file)


}
    // if (req.url === '/contato')
    //     return res.end('<h1>Contato</h1>')
).listen(9000, () => console.log('Server is runing'))