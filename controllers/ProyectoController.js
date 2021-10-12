import models from "../models/models";

export default {
  add: async (req, res, next) => {
    try {
      const reg = await models.Proyecto.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error"
      });
      next(e);
    }
  },

  list: async (req, res, next) => {
    try {
      const reg = await models.Proyecto.find();
      res.status(200).json(reg);  
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error"
      });
      next(e);
    }
  },

  remove: async (req, res, next) => {
    try {
      const reg = await models.Proyecto.findByIdAndDelete({
        _id: req.body._id,
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error"
      });
      next(e);
    }
  }

};
