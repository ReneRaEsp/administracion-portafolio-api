import routerx from "express-promise-router";
import proyectoRouter from "./proyecto";

const router = routerx();

router.use("/proyecto", proyectoRouter);

export default router;
