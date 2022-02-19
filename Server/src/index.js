const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
require('dotenv').config();
const routes = require('./routes/MyRouter');

require('./db')

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN
});
  
//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


//rutas
app.use(routes)
 

app.post("/crearPreferencia", (req, res) => {

	console.log(req.body)

	var preference = {}

		var item = {
		title: 'Blue shirt',
		quantity: 1,
		currency_id: 'ARS',
		unit_price: req.body.costo
		}

		var payer = {
		email: req.body.email
		}

		preference.items = [item]
		preference.payer = payer

	// let preference = {
	// 	items: [
	// 		{
	// 			title: "prueba", //req.body.description,
	// 			unit_price: 100,//Number(req.body.price),
	// 			quantity: 1//Number(req.body.quantity),
	// 		}
	// 	],
	// 	back_urls: {
	// 		"success": "http://google.com",
	// 		"failure": "http://localhost:8080/feedback",
	// 		"pending": "http://localhost:8080/feedback"
	// 	},
	// 	auto_return: "approved",
	// };

	mercadopago.preferences.create(preference)
		.then(function (response) {
			console.log("alguien pidio una preferencia yeeeee")
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function(req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(5000, () => {
  console.log("The server is now running on Port 5000");
});