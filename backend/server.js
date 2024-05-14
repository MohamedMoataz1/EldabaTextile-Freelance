
require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require("path");
const { json } = require('body-parser');
const axios = require('axios');
const app = express();
const bodyParser = require("body-parser");
const cloudinary = require('cloudinary');

cloudinary.config({
 cloud_name: "", // add your cloud_name
 api_key: "", // add your api_key
 api_secret: "", // add your api_secret
 secure: true
});


const corsOptions = {
	//https://testing-deployment2-46a3b.web.app/
    origin: '*',
    credentials: true,
    'access-control-allow-credentials': true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    //https://testing-deployment2-46a3b.web.app/
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
})

if (true||process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '')))
}


app.get('', async (req, res) => {
	try
	{
		cloudinary.v2.search.expression(
			'' // add your folder
		).execute().then(result=>res.json(result));
	}
	catch(err){
		console.log(err);
	}
});

app.get('', async (req, res) => {
	try
	{
		cloudinary.v2.search.expression(
			'' // add your folder
		).execute().then(result=>console.log(result));
	}
	catch(err){
		console.log(err);
	}
});


if (true||process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, ''));
    });
}
console.log(process.env.PORT)
app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));