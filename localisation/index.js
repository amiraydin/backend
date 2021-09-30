const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const translation = require('./translation.json');

app.use(express.static('public'));
const port = 8080;
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/:lang?', (req, res) => {
    var lang = req.params.lang || "fr";
    var page = translation[lang];
    console.log('lang', lang);
    res.render('home', {
        pageTitle: page.pageTitle,
        title: page.title,
        image: page.image
    });

})

app.listen(port, () => {
    console.log('le port est ouvert :' + port);
})