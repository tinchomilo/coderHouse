import express from 'express';
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import dirname from "./dirname.js";
import { dbConnection } from './db/dbConnection.js';
import users from "./routes/users.js";
import home from "./routes/home.js";

const app = express();

app.use(express.json());
app.use( express.urlencoded( { extended: true}) );
app.use( express.static(`${dirname}/public`))

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', 'hbs');
app.set('views', `${dirname}/views`);

dbConnection();

app.use('/', users)
app.use('/home', home)


app.listen(3000, () => {
    console.log('Server running on port 3000');
});