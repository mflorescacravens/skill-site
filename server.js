const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(layouts);

var contact = {
	name: "Miguel Floresca-Cravens",
	email: "mflorescacravens@gmail.com",
	phone: "206-941-1312",
	fax: "Who uses faxes anymore?",
	site: "http://mfc.io"
};

// var skills = [
// 	"JavaScript",
// 	"HTML 5",
// 	"CSS 3",
// 	"Node JS",
// 	"Express JS",
// 	"Crooning"
// ];

app.get('/', function(req, res) {
    res.render('index', {contact});
    // res.send("yeah it works");
});

app.get('/contact', function(req, res) {
    res.render('contact', {contact});
    // res.send("yeah it works");
});



// app.get('/', function(req, res) {
//     res.render('index', {contact, skills});
// });

app.listen(3000, function() {
    console.log('listening on port 3000...');
});