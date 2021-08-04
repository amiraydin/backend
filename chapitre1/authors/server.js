
const express = require("express");
const port = 8000;
const app = express();

// console.log('hallo !');

// app.listen(port, () => {
//     console.log(`server has started :` + port);
// });
var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
// console.log(authors);
// app.get('/', (req, res) => {
//     res.send(authors);
//   });


// app.get('/authors/:id', (req, res) => {
//     let id = req.params.id;
//     let nationality = "";
//     let name = "";

//     switch (id) {
//         case "1":
//             name = "Lawrence Nowell";
//             nationality = "UK"
//             break;

//         case "2":
//             name = "William Shakespeare";
//             nationality = "UK"
//             break;

//         case "3":
//             name = "Charles Dickens";
//             nationality = "US"
//             break;

//         case "4":
//             name = "Oscar Wilde";
//             nationality = "UK"
//             break;

//         default:
//             name = "not found";
//             nationality = "none"
//             break;
//     }
//     res.send(`${name}, ${nationality}`);
// });

// app.listen(port, () => {
//     console.log(`Server started on port: ${port}`);
// });

/*         exo 3            */

app.get('/authors/:id/books/', (req, res) => {
    let id = req.params.id-1;
    var bookArray = authors[id].books;
    var string = "";
    // for (let i = 0; i < bookArray.length; i++) {
    //     string += ` ${bookArray[i]} `;
    // }
    let i = 0;
    while (i < bookArray.length) {
        string += ` ${bookArray[i]} `;
        i++
    }
    
    res.send(`${string}`);
})
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});


/*    exo 4    */


