import routerx from 'express-promise-router';
import proyectoController from '../controllers/ProyectoController';

const router = routerx();

router.post("/add", proyectoController.add);

router.get("/list", proyectoController.list);

router.delete("/remove", proyectoController.remove);

export default router;
