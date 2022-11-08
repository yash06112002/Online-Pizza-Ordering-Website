const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home-page");
})
app.listen(PORT, () => {
    console.log(`Listening on xyz port ${PORT}`);
})