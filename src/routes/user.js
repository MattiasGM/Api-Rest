import { Router } from 'express';
import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nesta aplicação essas rotas não devem existir -> falha de segurança
// router.get('/', userController.index); // Listar todos os usuários
// router.get('/', loginRequired, userController.show); // Mostrar um usuário pelo id

// Rotas que devem existir para essa aplicação
router.post('/', userController.store); // Criar usuário
router.put('/', loginRequired, userController.update); // Atualizar dados do usuário
router.delete('/', loginRequired, userController.delete); // Deletar usuário

export default router;
