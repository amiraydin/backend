const express = require('express');
const app = express();

app.listen(8008, () => {
    console.log(`le serveur est en écoute : ${8008}`);
});

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('hello')
})