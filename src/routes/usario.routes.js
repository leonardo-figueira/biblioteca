import {Router} from 'express';
import usuarioControllers from '../controller/usuario.controllers.js';

const router = Router();

router.post('/usuarios', usuarioControllers.createUsuarioController);

export default router;