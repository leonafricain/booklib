if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const router = require('../routes')
const app =express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());


app.use(express.static('uploads'))
//dbase
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to db atlas mongodb...'))


//routes
app.use(router)


port = process.env.PORT || 3000

app.listen(port, () => console.log(`app listen on port ${port}...`))