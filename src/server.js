require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const Kitten = require('./models/Kitten');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for form data

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

const cat = new Kitten({ name: 'Silence' });
cat.save();

//test connection
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();