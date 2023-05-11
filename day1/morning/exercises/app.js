// try running this code with `node app.js`, and you'll notice it errors.
// what must you do to make the code work?

var express = require('express')
var app = express()
var students = require('./students')

// use a for loop to create an array with each lowercase letter in the alphabet
// resulting array should be ['a', 'b', ... 'y', 'z']

let letters = [];

for (let i = 97; i < 123; i++)
{
    letters.push(String.fromCharCode(i));
}

// use a for loop to generate an app.get function for each endpoint
// callback function should res.send the letter's index in the alphabet
// do not use block scoped variables (let)
// do not use Array.prototype.forEach()
// first endpoint should be:
// app.get('/a', function(req, res) { res.send("1") });
console.log(students.length)
for (let j = 0; j < letters.length; j++)
{
    let char = letters.indexOf(letters[j]) + 1;
    console.log(char);
    app.get(`/${letters[j]}`, (req, res) => {
        res.send(char.toString());
    })
}
    



// by the time you get to this point, jordan will have pushed a new commit
// updating ./students.js
// import that array into this file, and write an endpoint at GET /partners
// that randomly pairs students. feel free to use whatever data structure you
// see fit
app.get('/partners', (req, res) => {
    let index_one = Math.round(Math.random() * 10);

    let index_two = Math.round(Math.random() * 10 + 12);

    let partner_one = students[index_one];
    let partner_two = students[index_two];
    res.send(partner_one + " and " + partner_two);
})




app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
