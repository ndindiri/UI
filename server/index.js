import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import parcels from './datastore/parcel';
import routes from './routes/index';


const app = express();

app.use(express.json());
app.use(logger('dev'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'), (req,res, next) =>{
    console.log(req.url);
    next();
});

routes(app)

//PORT 
const port = (process.env.PORT || 3000);

app.listen(3000, () => console.log(`listening on port ${port}...`));
