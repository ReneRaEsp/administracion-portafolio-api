import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public' ));

app.listen(PORT, ()=>{
  console.log(`Escuchando desde el puerto ${PORT}`);
});



