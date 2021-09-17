const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./Database/db');
const cors = require('cors')
const user_route = require('./Routes/User_route');
const booktrip_route = require('./Routes/BookTrip_route');

const app = express();
// app.use(express.static(PublicDir));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(user_route);
app.use(booktrip_route);



app.listen(100);