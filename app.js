const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;


app.use(express.static(path.join(__dirname, '/DH-Heroes/public')))



// routing

app.get('/', (req, res ) => {
    let home = path.join(__dirname, '/DH-Heroes/views/index.html');
    res.sendFile(home);

    
})

app.get('/babbage', (req, res) => {
    let babbage = path.join(__dirname, '/DH-Heroes/views/babbage.html');
    res.sendFile(babbage);
})

app.get('/berners-lee', (req, res) => {
    let berners = path.join(__dirname, '/DH-Heroes/views/berners-lee.html');
    res.sendFile(berners);
})

app.get('/clarke', (req, res) => {
    let clarke = path.join(__dirname, '/DH-Heroes/views/clarke.html');
    res.sendFile(clarke);
})

app.get('/hamilton', (req, res) => {
    let hamilton = path.join(__dirname, '/DH-Heroes/views/hamilton.html');
    res.sendFile(hamilton)
})

app.get('/hopper', (req, res) => {
    let hopper = path.join(__dirname, '/DH-Heroes/views/hopper.html');
    res.sendFile(hopper);
})

app.get('/lovelace', (req, res) => {
    let lovelace = path.join(__dirname, '/DH-Heroes/views/lovelace.html');
    res.sendFile(lovelace);
})

app.get('/turing', (req, res) => {
    let turing =  path.join(__dirname, '/DH-Heroes/views/turing.html');
    res.sendFile(turing);

})




app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))


