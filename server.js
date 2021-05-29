// import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";

const http = require('http')
const fs = require('fs')
const path = require('path')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbiqGKIAXBomz3rAIzAMhXSnHdXrG4TPQ",
    authDomain: "plenisaude-1086c.firebaseapp.com",
    projectId: "plenisaude-1086c",
    storageBucket: "plenisaude-1086c.appspot.com",
    messagingSenderId: "601884169648",
    appId: "1:601884169648:web:e4475bb07fcc334605f275",
    measurementId: "G-5B0EBD42BM"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'indexpassado.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/final') {
        fs.readFile(
            path.join(__dirname, 'public', 'final.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }


    // else if (req.url === '/segundoSB')

    // const filePath = path.join(__dirname, 'public', file)


}
    // if (req.url === '/contato')
    //     return res.end('<h1>Contato</h1>')
).listen(9000, () => console.log('Server is runing'))
