var express = require('express')
var app = express()

let coinState = true;

app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.get('/hello', (req, res) => {
    console.log('hello');
    res.send('hello');
});

app.get('/coin', (req, res) => {
    var randomNumber = Math.random();
    var coin = randomNumber > .5 ? "Heads" : "Tails";
    res.send(coin); 
});

app.get('/getCoinState', (req, res) => {
    let state = coinState === true ? "Heads" : "Tails";
    res.send(state);
});

app.get('/flipCoinState/:hello', (req, res) => {
    res.send(req.params.hello);
});

app.get('/flipCoinState', (req, res) => {
    let randomNumber = Math.random();
    let apiCoin = randomNumber > .5 ? "Heads" : "Tails";
    coinState = apiCoin === "Heads" ? true : false;
    res.send(apiCoin);
});

app.get('/getCode/:char', (req, res) => {
    if (req.params.char.length > 1) {
        return res.status(400).send("Sorry, No Char Found");
    }

    if (req.params.char.charCodeAt(0) >= 97)
    {
        res.status(200).send(String(req.params.char.charCodeAt(0)));
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
