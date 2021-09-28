const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const translation = require('./translations.json')
// var obj;
// translation.readFile('file', 'utf8', (err, data) => {
//     if (err) throw err;
//     obj = JSON.parse(data)
// });

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/:lang?', (req, res) => {
    let lang = req.params.lang || fr;
    console.log('lang', lang);
    var page = translation[lang]
    console.log('page', page);
    res.render('home', {
        pageTitle: page.pageTitle,
        title: page.title,
        img: page.image
    })
});


console.log(translation.fr);











app.listen(8080);
console.log('le port est ouvert :');
