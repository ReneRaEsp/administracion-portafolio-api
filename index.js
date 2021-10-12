import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes";
//Dotenv
dotenv.config();

//DataBases
mongoose.Promise = global.Promise;
const dBUrl = process.env.DATABASE_URL;
mongoose
  .connect(dBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((mongoose) => console.log(`conectado a la BD `))
  .catch(console.log);

//Express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Escuchando desde el puerto ${PORT}`);
});
