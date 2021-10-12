import mongoose, {Schema} from 'mongoose';

const proyectoSchema = new Schema({
  lenguaje: { type: String, maxlength: 65 },
  titulo: { type: String, maxlength: 30, required: true },
  descripcion: { type: String, maxlength: 200, required: true },
  imagen: { type: String, maxlength: 255, required: true },
  estado: { type: Number, default: 1 },
  subido: { type: Date, default: Date.now }
  });

const Proyecto = mongoose.model("proyecto", proyectoSchema);
export default Proyecto;
