if(process.env.NODE_ENV !== 'production'){ //only load in this env variable if dev en. not prod env. 
    require('dotenv').config(); //load vars from .env file
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index'); //tell it where index route we wrote is

app.set('view engine','ejs'); //ejs is the view engine
app.set('views',__dirname+'/views'); //views coming from views directory in the project
app.set('layout', 'layouts/layout'); //every file is put inside so dont need to duplicate html
app.use(expressLayouts); 
app.use(express.static('public')); //where the public files are

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true}) //needed?
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/',indexRouter); 

app.listen(process.env.PORT || 3000);//when we deploy, the servers gonna tell us what port. 

